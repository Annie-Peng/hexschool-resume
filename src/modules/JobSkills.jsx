import { useContext, useState, useEffect } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hooks/useCusForm";
import Form from '../common/components/Form';
import { v4 as uuidv4 } from 'uuid';
import { turnArray } from "../common/helpers/turnArray";
import { turnGroupObject } from "../common/helpers/turnGroupObject";
import SubGroupInput from "../common/components/SubGroupInput";
import JobSkillsCard from "./JobSkillsCard";

const JobSkills = () => {

  const { jobSkills, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(jobSkills);
  const { formFunctions, formFunctions: { reset }, formDataSet, formClass, title, edit, setEdit } = useCusForm({
    defaultValues: jobSkills,
    formTitle: "jobSkills",
  });
  const id = uuidv4();

  useEffect(()=>{
    setRenderItem({jobSkills});
    const newJobSkills = turnArray({jobSkills});
    reset(newJobSkills); //初始化表單預設值

  },[jobSkills])

  function onSubmit (values) {
    const newValues = turnGroupObject(values.jobSkills);
    updateSection({name: "jobSkills", values: newValues});
    setEdit(false)
  }

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button title="編輯" className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form
        formFunctions={formFunctions}
        edit={edit}
        setEdit={setEdit}
        onSubmit={onSubmit}
      >
        {Object.entries(renderItem).map(([name], index)=>{
            const subInsertData = {[id]:{name:""}};
            const insertData = {[id]:{name:"",items: [subInsertData]}};

            return (
              <SubGroupInput
                key={index}
                formDataSet={formDataSet}
                formClass={formClass}
                name={name}
                insertData={insertData}
                edit={edit}
                subInsertData={subInsertData}
                requiredShowResume={false}
                initContent="若您欲新增工作技能，請點選右上方的「編輯圖示」"
              >
                  {(itemData, dataName) => (
                    <JobSkillsCard
                      formDataSet={formDataSet}
                      formClass={formClass}
                      data={itemData}
                      dataName={dataName}
                      edit={edit}
                    />
                  )}
              </SubGroupInput>
            )
        })}
      </Form>
    </section>
  );
};

export default JobSkills;

export const JobSkillsResume = ({ data }) => {

  if(Object.keys(data).length === 0) return;

  return (
    <>
      <hr className="h-[1px] border-secondary-300" />
      <section className="py-[30px]">
        <h2 className="font-bold text-2xl">工作技能</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {Object.values(data).map((title, tIndex)=>{
            return (
              <li key={`title ${tIndex}`}>
                <h3 className="tag">
                  {title.name ? title.name : "尚未填寫"}
                </h3>
                <ul className="flex flex-col gap-2 mt-4">
                  {Object.values(title.items).map((item, iIndex)=>{
                    return (
                      <li key={`item ${iIndex}`}>
                        <p className="before:content-['#'] before:mr-4">
                          {item.name ? item.name : "尚未填寫"}
                          </p>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}