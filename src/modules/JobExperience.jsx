import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { jobExperienceTestDataSet } from '../dataSet/testDataSet';
import FormGroupInput from "../common/components/FormGroupInput";
import useCusForm from "../common/hook/useCusForm";


const JobExperience = () => {

  const { jobExperience } = useContext(FormContext);
  const { Form, formFunctions, formFunctions: { formState: {errors} }, renderItem, setRenderItem, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: jobExperienceTestDataSet,
    formTitle: "jobExperience"
  });

  console.log(jobExperience);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          const formClass = resumeStyleSet.jobExperience[index];
          if(formData.group) { // group表單
            return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} formClass={formClass} edit={edit} {...formFunctions} />
            
          }
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} error={errors[formData.name]} formClass={formClass} edit={edit} {...formFunctions} />}
            </Fragment>
          )
        })}
      </Form>
    </section>
  );
};

export default JobExperience;

export const JobExperienceResume = ({ data }) => {

  if(!data.jobExperience) return;
  const { jobExperience } = data;

  return (
    <section>
      <h2 className="font-bold text-2xl">工作經驗</h2>
      <ul>
        {Object.values(jobExperience).map((title, tIndex)=>{
          const { startYear, startMonth, endYear, endMonth, isLeft } = title.workingLength;
          const itemsLength = Object.values(jobExperience).length;
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