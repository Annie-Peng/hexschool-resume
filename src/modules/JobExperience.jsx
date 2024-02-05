import { useContext, useState, useEffect } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hooks/useCusForm";
import Form from '../common/components/Form';
import { turnArray } from "../common/helpers/turnArray";
import { turnObject } from "../common/helpers/turnObject";
import { v4 as uuidv4 } from 'uuid';
import JobExperienceCard from "./JobExperienceCard";
import MarkdownIdentifier from "../common/components/MarkdownIdentifier";

const JobExperience = () => {

  const { jobExperience, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(jobExperience);
  const { formFunctions, formFunctions: { reset }, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: jobExperience,
    formTitle: "jobExperience",
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
      <Form
        formFunctions={formFunctions}
        edit={edit}
        setEdit={setEdit}
        onSubmit={onSubmit}
      >
        {Object.entries(renderItem).map(([name], index)=>{
            const insertData = {[id]:{
              company: "",
              occupation: "",
              workingLength: {
                startTime: "",
                endTime: "",
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

  if(Object.keys(data).length === 0) return;

  return (
    <>
      <hr className="h-[1px] border-secondary-300" />
      <section className="py-[30px]">
      <h2 className="font-bold text-2xl">工作經驗</h2>
      <ul className="flex flex-col gap-6 mt-4">
        {Object.values(data).map((title, tIndex)=>{
          const { startTime, endTime, isLeft } = title.workingLength;
          return (
            <li key={`title ${tIndex}`} className="flex gap-6 relative">
              <div className="absolute -z-10 top-0 left-[13px] h-full w-[2px] bg-primary-500" />
              <span className={`bg-filledHexschool bg-cover w-[28px] h-[24px] text-center text-primary-500 font-bold flex-shrink-0`} />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-xl">
                    {title.company}
                    <span className="text-primary-500">
                      ・{title.occupation}
                    </span>
                  </h3>
                  <p>{startTime} - {isLeft ? "至今" : `${endTime}` }</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <h4 className="tag">工作內容</h4>
                  <MarkdownIdentifier texts={title.description} />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <h4 className="tag">工作成果</h4>
                  <MarkdownIdentifier texts={title.achievement} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      </section>
    </>
  )
}