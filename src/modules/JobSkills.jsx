import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import FormGroupInput from "../common/components/FormGroupInput";
import { jobSkillTestDataSet } from "../dataSet/testDataSet";
import useCusForm from "../common/hook/useCusForm";


const JobSkills = () => {

  const { jobSkills } = useContext(FormContext);
  const { Form, formFunctions, formFunctions: { formState: {errors} }, renderItem, setRenderItem, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: jobSkillTestDataSet,
    formTitle: "jobSkills"
  });

  console.log(jobSkills);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          const formClass = resumeStyleSet.jobSkills[index];
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

export default JobSkills;

export const JobSkillsResume = ({ data }) => {

  if(!data.jobSkills) return;
  const { jobSkills } = data;

  return (
    <section>
      <h2 className="font-bold text-2xl">工作技能</h2>
      <ul className="mt-4">
        {Object.values(jobSkills).map((title, tIndex)=>{
          console.log(title);
          return (
            <li key={`title ${tIndex}`}>
              <h3 className="tag">{title.name}</h3>
              <ul className="flex flex-col gap-2 mt-4">
                {Object.values(title.items).map((item, iIndex)=>{
                  return (
                    <li key={`item ${iIndex}`}>
                      <p className="before:content-['#'] before:mr-2">{item.name}</p>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}