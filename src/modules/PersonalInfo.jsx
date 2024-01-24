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

// if(formData.group) { // group表單
//   return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} formClass={formClass} edit={edit} defaultValue={defaultValues[formData.group[0].group]} {...formFunctions} />
  
// }
// return (
//   <Fragment key={index}>
//     {RenderForm && <RenderForm formData={formData} error={errors[formData.name]} formClass={formClass} edit={edit} defaultValue={defaultValues[formData.name]} {...formFunctions} />}
//   </Fragment>
// )