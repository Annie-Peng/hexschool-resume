import { Fragment, useContext, useEffect, useState } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hooks/useCusForm";
import Form from '../common/components/Form';
import { turnDateFormat } from "../common/helpers/turnDateFormat";


const Declaration = () => {

  const formTitle = "declaration";
  const { declaration, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(declaration);
  const { formFunctions, formFunctions: { formState: {errors}, watch, reset }, formDataSet, formClass, title } = useCusForm({
    defaultValues: declaration,
    formTitle
  });

  const watchSignature = watch("signature");
  const watchApproved = watch("approved");

  useEffect(()=>{
    const formattedUpdatedDate = turnDateFormat(new Date());
    const values = {
      approved: watchApproved,
      signature: watchSignature,
      signatureBuiltTime: declaration.signatureBuiltTime === "" ? formattedUpdatedDate : declaration.signatureBuiltTime,
      signatureUpdatedTime: formattedUpdatedDate,
    };
    updateSection({name: formTitle, values });
  },[watchSignature, watchApproved])

  useEffect(()=>{
    reset(declaration); //初始化表單預設值

  },[declaration])

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      <div className="ml-auto w-[90%] py-2">
        <ol>
          <li>
            本人同意多角人才基於就業服務之目的依法蒐集、處理、利用個人資料於任用相關作業之進行。
          </li>
          <li>
            本人確認所提供之個人資料及相關經歷均屬實，如有不實情形，願意承擔相應責任。 
          </li>
        </ol>
        <Form
          formFunctions={formFunctions}
          edit={false}
          formTitle={formTitle}
        >
          <div className="flex flex-wrap items-center justify-between">
            {Object.entries(renderItem).map(([name, values], index)=>{

            const RenderForm = controller[formDataSet[name]?.component]; // 選擇表單元件

            return (
                <Fragment key={index}>
                  {RenderForm && <RenderForm formDataSet={formDataSet} name={name} error={errors[name]} formClass={formClass[name]} edit={true} validation={formDataSet[name]}/>}
                </Fragment>
              )
          })}
          <p className="w-[150px] text-right">日期 {declaration.signatureUpdatedTime}</p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Declaration;

export const DeclarationResume = ({ data }) => {

  return (
    <>
      <hr className="h-[1px] border-secondary-300" />
      <section className="flex flex-col gap-4 py-[30px]">
        <h2 className="font-bold text-2xl">聲明事項</h2>
        <ol>
          <li>
            本人同意多角人才基於就業服務之目的依法蒐集、處理、利用個人資料於任用相關作業之進行。
          </li>
          <li>
            本人確認所提供之個人資料及相關經歷均屬實，如有不實情形，願意承擔相應責任。 
          </li>
        </ol>
        <div className="flex items-center gap-2">
          <span className={`w-[24px] h-[24px] bg-cover ${data.approved ? "bg-check" : "bg-uncheck"}`}/>
          <span>同意上述聲明及確認個人資料屬實。</span>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-2 items-center w-full">
            <span>簽名</span>
            { data.signature ?  (
              <div className="w-[200px] h-[100px]">
                <img src={data.signature} alt="signature" className="w-full h-full object-contain rounded-md"/>
              </div>
            ) : (
              <p className="w-[200px] p-4 border-2 border-secondary-300 rounded-md text-center text-secondary-500">尚未簽名</p>
            )}
            <p className="ml-auto w-[150px]">
              日期 {data.signatureUpdatedTime}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}