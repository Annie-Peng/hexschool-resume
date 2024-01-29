import { useContext } from "react";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hook/useCusForm";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { turnGroupObject } from "../common/components/helper/turnGroupObject";
import SubGroupInput from "../common/components/refactor/SubGroupInput";
import { turnArray } from "../common/components/helper/turnArray";
import { useState } from "react";
import PortfolioCard from "./PortfolioCard";



const Portfolio = () => {

  const { portfolio, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(portfolio);
  const { Form, formFunctions: { reset }, formDataSet, formClass, title, edit, setEdit } = useCusForm({
    defaultValues: portfolio,
    formTitle: "portfolio",
    onSubmit
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
      <Form>
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
  if(!data) return;

  return (
    <section>
      <h2 className="font-bold text-2xl">專業成果 / 作品</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {Object.values(data).map((title, tIndex)=>{
          return (
            <li key={`title ${tIndex}`} className="flex flex-col gap-4">
              <h3 className="tag">{title.name}</h3>
              <ul className="flex flex-col gap-4">
                {Object.values(title.items).map((item, iIndex)=>{
                  const itemsLength = Object.keys(title.items).length;
                  return (
                    <li key={`item ${iIndex}`} className={`flex gap-2 relative`}>
                      {iIndex+1 !== itemsLength && (
                        <div className="absolute top-[24px] left-[13px] h-full w-[2px] bg-primary-500" />
                      )}
                      <span className={`bg-thinBorderHexschool bg-contain w-[28px] h-[24px] text-center text-primary-500 font-bold flex-shrink-0`}>
                        {iIndex+1}
                      </span>
                      <div className="flex flex-col">
                        <p>網址 | {item.url}</p>
                        <p>作品敘述 | {item.description}</p>
                        <p>功能內容 | {item.functions}</p>
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
  )
}