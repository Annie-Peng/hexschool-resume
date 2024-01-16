import { Fragment, useContext } from "react";
import { useForm } from 'react-hook-form';
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeDataSet } from '../dataSet/resumeDataSet';
import { personalInfoTestData } from '../dataSet/testDataSet';


const PersonalInfo = () => {

  const { title, formDataSet } = resumeDataSet.personalInfo;
  const { personalInfo, updateForm } = useContext(FormContext);
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: personalInfoTestData
  });

  const onSubmit = (values) => {
    updateForm({name: "personalInfo", values})
  }

  // console.log(errors);
  console.log(personalInfo);

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

export default PersonalInfo;
