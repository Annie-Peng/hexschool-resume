import { Fragment, useContext } from "react";
import { useForm } from 'react-hook-form';
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeDataSet } from '../dataSet/resumeDataSet';
import { personalInfoTestData } from '../dataSet/testDataSet';
import FormGroupInput from "../common/components/FormGroupInput";
import { useState } from "react";


const PersonalInfo = () => {

  const { title, formDataSet } = resumeDataSet.personalInfo;
  const [ renderItem, setRenderItem ] = useState(formDataSet);
  const { personalInfo, updateForm } = useContext(FormContext);
  const { register, handleSubmit, formState: {errors}, unregister } = useForm({
    defaultValues: personalInfoTestData
  });

  const onSubmit = (values) => {
    updateForm({name: "personalInfo", values})
  }

  // console.log(errors);
  console.log(personalInfo);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          if(formData.group) { // group表單
            return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData?.group} register={register} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} unregister={unregister}/>
          }
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} register={register} error={errors[formData.name]}/>}
            </Fragment>
          )
        })}
        <div className="flex justify-center gap-4 mt-4">
          <button className="cancelledBtn btn">取消</button>
          <button className="saveBtn btn">儲存</button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;