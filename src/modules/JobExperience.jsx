import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { jobExperienceTestDataSet } from '../dataSet/testDataSet';
import FormGroupInput from "../common/components/FormGroupInput";
import useCusForm from "../common/hook/useCusForm";


const JobExperience = () => {

  const { jobExperience } = useContext(FormContext);
  const { Form, formFunctions, formFunctions: { formState: {errors} }, renderItem, setRenderItem, formDataSet, title } = useCusForm({
    defaultValues: jobExperienceTestDataSet,
    formTitle: "jobExperience"
  });

  console.log(jobExperience);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      <Form>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          const formClass = resumeStyleSet.jobExperience[index];
          if(formData.group) { // group表單
            return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} formClass={formClass} {...formFunctions} />
            
          }
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} error={errors[formData.name]} formClass={formClass} {...formFunctions} />}
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
      <h2 className="font-bold">工作經驗</h2>
      <ul>
        {Object.values(jobExperience).map((title, tIndex)=>{
          const { startYear, startMonth, endYear, endMonth, isLeft } = title.workingLength;
          return (
            <li key={`title ${tIndex}`}>
              <div className="flex justify-between">
                <h3>{title.company}・{title.occupation}</h3>
                <p>{startYear}年{startMonth}月 - {isLeft ? `${endYear}年${endMonth}月` : "至今" }</p>
              </div>
              <div>
                <h4>工作內容</h4>
                <p>{title.description}</p>
              </div>
              <div>
                <h4>工作成果</h4>
                <p>{title.achievement}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}