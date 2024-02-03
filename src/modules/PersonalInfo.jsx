import { Fragment, useContext, useState, useEffect } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import GroupInput from "../common/components/refactor/GroupInput";
import useCusForm from "../common/hook/useCusForm";
import Form from '../common/components/Form';
import { v4 as uuidv4 } from 'uuid';
import { turnObject } from "../common/components/helper/turnObject";
import { turnArray } from "../common/components/helper/turnArray";
import MarkdownIdentifier from "../common/components/MarkdownIdentifier";

const PersonalInfo = () => {

  const { personalInfo, updateSection } = useContext(FormContext);
  const [ renderItem, setRenderItem ] = useState(personalInfo);
  const { formFunctions, formFunctions: { formState: {errors}, reset }, formDataSet, formClass, title, edit, setEdit } = useCusForm({
    defaultValues: personalInfo,
    formTitle: "personalInfo",
  });
  const id = uuidv4();

  useEffect(()=>{
    setRenderItem(personalInfo);
    const newPersonalInfo = turnArray(personalInfo);
    reset(newPersonalInfo); //初始化表單預設值

  },[personalInfo])

  function onSubmit (values) {
    const newValues = turnObject(values);
    updateSection({name: "personalInfo", values: newValues})
    setEdit(false)
  }

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form
        formFunctions={formFunctions}
        edit={edit}
        setEdit={setEdit}
        onSubmit={onSubmit}
      >
        {Object.entries(renderItem).map(([name, values], index)=>{
        if(typeof values === "object"){
          const insertData = {[id]:{name:"",major:"",leftTime:""}};
          return (
            <GroupInput
              formDataSet={formDataSet} 
              key={index}
              name={name}
              insertData={insertData}
              edit={edit}
            />
          )
        }
        const RenderForm = controller[formDataSet[name].component]; // 選擇表單元件

        return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formDataSet={formDataSet} name={name} error={errors[name]} formClass={formClass[name]} edit={edit} validation={formDataSet[name].validation}/>}
            </Fragment>
          )
      })}
      </Form>
    </section>
  );
};

export default PersonalInfo;

export const PersonalInfoResume = ({ data }) => {
  const renderData = [
    {
      title: "電話",
      name: "phone",
    },
    {
      title: "電子郵件",
      name: "email"
    },
    {
      title: "累積年資",
      name: "workingLength"
    },
    {
      title: "期望薪資",
      name: "expectedSalary",
      packed: (data) => {

        if(!data) return

        return (
          <p className="mt-1">
            {data} (年薪/月薪)
          </p>
        )
      }
    },
    {
      title: "目前現居地",
      name: "currentCity",
    },
    {
      title: "未來想要工作地",
      name: "futureCities",
    },
    {
      title: "學歷",
      name: "graduateSchool",
      packed: (data) => {
        return Object.values(data).map((value, index)=>{

          if(!value.name) return

          return (
            <p key={index} className="whitespace-nowrap mt-1">
              {value.leftTime}畢業 / {value.name} / {value.major}
            </p>
          )
        })
      }
    },
  ]

  return (
    <section>
      <div className="flex gap-8 mb-[30px]">
        <div className="w-[350px] min-h-[250px]">
          { data.profile ? (
            <img src={data.profile} alt="profile" className="w-full h-full object-cover rounded-md"/>
          ) : (
            <div className="border h-full rounded-md flex justify-center items-center text-gray-500 bg-gray-300">
              尚未更新照片
            </div>
          )}
        </div>
        <div className="w-full flex flex-wrap">
          <h1 className="w-1/2 font-bold text-4xl self-end">
            {data.applicantName ? data.applicantName : "姓名"}
          </h1>
          <p className="w-1/2 font-bold text-lg before:content-['#'] self-end">
            {data.occupation ? data.occupation : "目前工作職稱"}
          </p>
          <ul className="flex flex-wrap gap-y-4 border-t-2 border-secondary-300 pt-4 mt-1 w-full">
            {renderData.map((item, index)=>(
              <li key={index} className="w-1/2">
                <h2 className="text-gray-700 text-sm">{item.title}</h2>
                {item.packed ? (
                  item.packed(data[item.name])
                ) : (
                  <p className="mt-1">
                    {data[item.name]}
                  </p>
                )  }
              </li>
            ))}
          </ul>
        </div>
      </div>
      {data.aboutMe &&
        <div className="py-[30px] border-t border-secondary-300">
          <MarkdownIdentifier texts={data.aboutMe} />
        </div>
      }
    </section>
  )
}