import { Fragment, useContext, useEffect, useState } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import useCusForm from "../common/hook/useCusForm";
import Form from '../common/components/Form';
import { turnDateFormat } from "../common/components/helper/turnDateFormat";


const Declaration = () => {

  const { declaration, updateSection } = useContext(FormContext);
  const [renderItem, setRenderItem] = useState(declaration);
  const { formFunctions, formFunctions: { formState: {errors}, watch, reset }, formDataSet, formClass, title, edit } = useCusForm({
    defaultValues: declaration,
    formTitle: "declaration"
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
  updateSection({name: "declaration", values });
},[watchSignature, watchApproved])

useEffect(()=>{
  setRenderItem(declaration);
  reset(declaration); //初始化表單預設值

},[declaration])

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
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
        edit={edit}
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
        <p className="w-[150px]">日期 {declaration.signatureUpdatedTime}</p>
        </div>
      </Form>
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
        <p className={`before:content-[''] before:inline-block before:w-[23px] before:h-[20px] before:bg-cover ${data.approved ? "before:bg-filledHexschool" : "before:bg-thinBorderHexschool"} flex items-center gap-2`}>同意上述聲明及確認個人資料屬實。</p>
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
            <p className="ml-auto">
              日期 {data.signatureUpdatedTime}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}