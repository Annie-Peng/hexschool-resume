import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import FormGroupInput from "../common/components/FormGroupInput";
import { portFolioTestDataSet } from "../dataSet/testDataSet";
import useCusForm from "../common/hook/useCusForm";


const Portfolio = () => {

  const { portfolio } = useContext(FormContext);
  const { Form, formFunctions, formFunctions: { formState: {errors} }, renderItem, setRenderItem, formDataSet, title, edit, setEdit } = useCusForm({
    defaultValues: portFolioTestDataSet,
    formTitle: "portfolio"
  });

  console.log(portfolio);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      {!edit && 
        <button className="editBtn" type="button" onClick={()=>setEdit(true)} />
      }
      <Form>
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component]; // 選擇表單元件
          const formClass = resumeStyleSet.portfolio[index];
          if(formData.group) { // group表單
            return <FormGroupInput initGroupDataSet={formDataSet[index]} groupDataSet={formData} errors={errors[formData.group[0].group]} key={index} renderItem={renderItem} setRenderItem={setRenderItem} formIndex={index} formClass={formClass} edit={edit} {...formFunctions} />
            
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

export default Portfolio;

export const PortfolioResume = ({ data }) => {

  if(!data.portfolio) return;
  const { portfolio } = data;

  return (
    <section>
      <h2 className="font-bold text-2xl">專業成果 / 作品</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {Object.values(portfolio).map((title, tIndex)=>{
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