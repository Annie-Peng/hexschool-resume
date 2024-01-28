import { Fragment, useContext, useState, useEffect } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import GroupInput from "../common/components/refactor/GroupInput";
import useCusForm from "../common/hook/useCusForm";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { v4 as uuidv4 } from 'uuid';
import { turnObject } from "../common/components/helper/turnObject";
import { turnArray } from "../common/components/helper/turnArray";

const PersonalInfo = () => {

  const { personalInfo, updateSection } = useContext(FormContext);
  const [ renderItem, setRenderItem ] = useState(personalInfo);
  const { Form, formFunctions: { formState: {errors}, reset }, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: personalInfo,
    formTitle: "personalInfo",
    onSubmit
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
      <Form>
        {Object.entries(renderItem).map(([name, values], index)=>{
          const formClass = resumeStyleSet.personalInfo[name];
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
              {RenderForm && <RenderForm formDataSet={formDataSet} name={name} error={errors[name]} formClass={formClass} edit={edit} />}
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
        console.log(data);
        return Object.values(data).map((value, index)=>{
          return <p key={index}>{value.leftTime}畢業 / {value.name} / {value.major}</p>
        })
      }
    },
  ]

  return (
    <section>
      <div className="flex gap-8 mt-4">
        <div className="w-[400px] h-[350px]">
          <img src={data.profile} alt="profile" className="w-full h-full object-cover rounded-md"/>
        </div>
        <div className="w-full flex flex-wrap">
          <h1 className="w-1/2 font-bold">{data.applicantName}</h1>
          <p className="w-1/2 font-bold">#{data.occupation}</p>
          <ul className="flex flex-wrap gap-y-2 border-t border-secondary-500 pt-4">
            {renderData.map((item, index)=>(
              <li key={index} className="w-1/2">
                <h2 className="text-gray-500">{item.title}</h2>
                {item.packed ? (
                  item.packed(data[item.name])
                ) : (
                  <p>{data[item.name]}</p>
                )  }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-y border-secondary-500 mt-4 py-4">{data.aboutMe}</p>
    </section>
  )
}