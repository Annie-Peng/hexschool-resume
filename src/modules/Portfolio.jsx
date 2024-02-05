import { useContext } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hooks/useCusForm";
import Form from '../common/components/Form';
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { turnGroupObject } from "../common/helpers/turnGroupObject";
import { turnArray } from "../common/helpers/turnArray";
import SubGroupInput from "../common/components/SubGroupInput";
import { useState } from "react";
import PortfolioCard from "./PortfolioCard";



const Portfolio = () => {

  const { portfolio, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(portfolio);
  const { formFunctions, formFunctions: { reset }, formDataSet, formClass, title, edit, setEdit } = useCusForm({
    defaultValues: portfolio,
    formTitle: "portfolio",
  });


  const id = uuidv4();

  useEffect(()=>{
    setRenderItem({portfolio});
    const newPortfolio = turnArray({portfolio});
    reset(newPortfolio); //初始化表單預設值

  },[portfolio])


  function onSubmit (values) {
    const newValues = turnGroupObject(values.portfolio);
    updateSection({name: "portfolio", values: newValues});
    setEdit(false)
  }

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form
        formFunctions={formFunctions}
        edit={edit}
        setEdit={setEdit}
        onSubmit={onSubmit}
      >
        {Object.entries(renderItem).map(([name], index)=>{
            const subInsertData = {[id]:{url:"", description:"", functions:""}};
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
              >
                  {(itemData, dataName) => (
                    <PortfolioCard
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

export default Portfolio;

export const PortfolioResume = ({ data }) => {

  if(Object.keys(data).length === 0) return;

  return (
    <>
      <hr className="h-[1px] border-secondary-300" />
      <section className="py-[30px]">
        <h2 className="font-bold text-2xl">專業成果 / 作品</h2>
        <ul className="flex flex-col gap-8 mt-4">
          {Object.values(data).map((title, tIndex)=>{
            return (
              <li key={`title ${tIndex}`} className="flex flex-col gap-4">
                <h3 className="tag">{title.name ? title.name : "尚未填寫"}</h3>
                <ul className="flex flex-col gap-4">
                  {Object.values(title.items).map((item, iIndex)=>{
                    return (
                      <li key={`item ${iIndex}`} className="flex gap-6 relative">
                        <div className="absolute -z-10 top-0 left-[13px] h-full w-[2px] bg-primary-500" />
                        <span className="bg-thinBorderHexschool bg-contain w-[28px] h-[24px] text-center text-primary-500 font-bold flex-shrink-0">
                          {iIndex+1}
                        </span>
                        <div className="flex flex-col gap-2">
                          <p>網址 | {item.url ? item.url : "尚未填寫"}</p>
                          <p>作品敘述 | {item.description ? item.description : "尚未填寫"}</p>
                          <p>功能內容 | {item.functions ? item.functions : "尚未填寫"}</p>
                        </div>
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