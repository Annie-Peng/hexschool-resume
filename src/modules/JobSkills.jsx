import { useContext, useState, useEffect, Fragment } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hooks/useCusForm";
import Form from '../common/components/Form';
import { v4 as uuidv4 } from 'uuid';
import { turnArray } from "../common/helpers/turnArray";
import { turnGroupObject } from "../common/helpers/turnGroupObject";
import SubGroupInput from "../common/components/SubGroupInput";
import JobSkillsCard from "./JobSkillsCard";
import Modal from "../common/components/Modal";
import example from "/images/jobskills-example.png";

const JobSkills = () => {
  
  const formTitle = "jobSkills";
  const { jobSkills, updateSection, edit } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(jobSkills);
  const { formFunctions, formFunctions: { reset }, formDataSet, formClass, title } = useCusForm({
    defaultValues: jobSkills,
    formTitle,
  });
  const id = uuidv4();

  useEffect(()=>{
    setRenderItem({jobSkills});
    const newJobSkills = turnArray({jobSkills});
    reset(newJobSkills); //初始化表單預設值

  },[jobSkills])

  function onSubmit (values) {
    const newValues = turnGroupObject(values.jobSkills);
    updateSection({name: formTitle, values: newValues});
  }

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      <Form
        formFunctions={formFunctions}
        onSubmit={onSubmit}
        edit={edit}
        formTitle={formTitle}
      >
        {Object.entries(renderItem).map(([name], index)=>{
            const subInsertData = {[id]:{name:""}};
            const insertData = {[id]:{name:"",items: [subInsertData]}};

            return (
              <Fragment key={index}>
                {edit && 
                  <Modal btnText="看看範例" modalClass="w-[80%]">
                    {()=>(
                      <img src={example} alt="example" className="rounded-md" />
                    )}
                  </Modal>
                  }
                <SubGroupInput
                  formDataSet={formDataSet}
                  formClass={formClass}
                  name={name}
                  insertData={insertData}
                  edit={edit}
                  subInsertData={subInsertData}
                  requiredShowResume={false}
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
              </Fragment>
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