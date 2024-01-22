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