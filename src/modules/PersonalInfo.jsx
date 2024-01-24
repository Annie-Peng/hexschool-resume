import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { personalInfoTestData } from '../dataSet/testDataSet';
import FormGroupInput from "../common/components/FormGroupInput";
import useCusForm from "../common/hook/useCusForm";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';


const PersonalInfo = () => {

  const { personalInfo } = useContext(FormContext);
  const { Form, formFunctions, formFunctions: { formState: {errors} }, renderItem, setRenderItem, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: personalInfoTestData,
    formTitle: "personalInfo"
  });

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          const formClass = resumeStyleSet.personalInfo[index];
          if(formData.group) { // group表單
            return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} formClass={formClass} edit={edit} {...formFunctions}/>
          }

          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} error={errors[formData.name]} formClass={formClass} edit={edit} {...formFunctions}/>}
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
        <div className="w-[400px] h-[300px]">
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