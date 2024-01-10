import { Fragment, useContext } from "react";
import { useForm } from 'react-hook-form';
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeDataSet } from '../dataSet/resumeDataSet';


const JobExperience = () => {

  const { title, formDataSet } = resumeDataSet.jobExperience;
  const { jobExperience } = useContext(FormContext);
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  }

  // console.log(errors);
  console.log(jobExperience);

  return (
    <section>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component];
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} register={register} error={errors[formData.name]}/>}
            </Fragment>
          )
        })}
        <button>儲存</button>
        <button>取消</button>
      </form>
    </section>
  );
};

export default JobExperience;
