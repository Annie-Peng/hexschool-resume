import { useContext, useState, useEffect } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hook/useCusForm";
import { turnArray } from "../common/components/helper/turnArray";
import { v4 as uuidv4 } from 'uuid';
import { turnObject } from "../common/components/helper/turnObject";
import JobExperienceCard from "./JobExperienceCard";

const JobExperience = () => {

  const { jobExperience, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(jobExperience);
  const { Form, formFunctions: { formState: { errors }, reset }, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: jobExperience,
    formTitle: "jobExperience",
    onSubmit
  });
  const id = uuidv4();

  useEffect(()=>{
    setRenderItem({jobExperience});
    const newJobExperience = turnArray({jobExperience});
    reset(newJobExperience); //初始化表單預設值
    
  },[jobExperience])

  function onSubmit (values) {
    const newValues = turnObject(values);
    updateSection({name: "jobExperience", values: newValues.jobExperience});
    setEdit(false)
  }

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form>
        {Object.entries(renderItem).map(([name], index)=>{
            const insertData = {[id]:{
              company: "",
              occupation: "",
              workingLength: {
                startYear: "",
                startMonth: "",
                endYear: "",
                endMonth: "",
                isLeft: false
              },
              description: "",
              achievement: ""
            }};
            return (
              <JobExperienceCard key={index} formDataSet={formDataSet} name={name} insertData={insertData} edit={edit} />
            )
        })}
      </Form>
    </section>
  );
};

export default JobExperience;

export const JobExperienceResume = ({ data }) => {

  if(!data) return;

  return (
    <section>
      <h2 className="font-bold text-2xl">工作經驗</h2>
      <ul>
        {Object.values(data).map((title, tIndex)=>{
          const { startYear, startMonth, endYear, endMonth, isLeft } = title.workingLength;
          const itemsLength = Object.values(data).length;
          return (
            <li key={`title ${tIndex}`} className="flex gap-2 mt-4 relative">
              {tIndex+1 !== itemsLength && (
                <div className="absolute top-[24px] left-[13px] h-full w-[2px] bg-primary-500" />
              )}
              <span className={`bg-filledHexschool bg-cover w-[28px] h-[24px] text-center text-primary-500 font-bold flex-shrink-0`} />
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">
                    {title.company}<span className="text-primary-500">・{title.occupation}</span>
                  </h3>
                  <p>{startYear}年{startMonth}月 - {isLeft ? `${endYear}年${endMonth}月` : "至今" }</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <h4 className="tag">工作內容</h4>
                  <p>{title.description}</p>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <h4 className="tag">工作成果</h4>
                  <p>{title.achievement}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}