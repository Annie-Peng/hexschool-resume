import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { declarationTestDataSet } from "../dataSet/testDataSet";
import useCusForm from "../common/hook/useCusForm";


const Declaration = () => {

  const { declaration } = useContext(FormContext);
  const { formFunctions, formFunctions: { formState: {errors} }, formDataSet, title } = useCusForm({
    defaultValues: declarationTestDataSet,
    formTitle: "declaration"
  });

  // console.log(errors);

  return (
    <section className="resumeSection">
      <h2 className="resumeH2">{title}</h2>
      <ul>
        <li>
          1、本人同意多角人才基於就業服務之目的依法蒐集、處理、利用個人資料於任用相關作業之進行。
        </li>
        <li>
          2、本人確認所提供之個人資料及相關經歷均屬實，如有不實情形，願意承擔相應責任。 
        </li>
      </ul>
      <form className="flex flex-wrap items-center justify-between">
        {formDataSet.map((formData, index)=>{
          const RenderForm = controller[formData.component];
          const formClass = resumeStyleSet.declaration[index];
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formData={formData} error={errors[formData.name]} formClass={formClass} {...formFunctions} />}
            </Fragment>
          )
        })}
        <p className="w-[120px]">日期 {declaration.signatureUpdatedTime}</p>
      </form>
    </section>
  );
};

export default Declaration;

export const DeclarationResume = ({ data }) => {

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">聲明事項</h2>
      <ul>
        <li>
          1、本人同意多角人才基於就業服務之目的依法蒐集、處理、利用個人資料於任用相關作業之進行。
        </li>
        <li>
          2、本人確認所提供之個人資料及相關經歷均屬實，如有不實情形，願意承擔相應責任。 
        </li>
      </ul>
      <p className={`before:content-[''] before:inline-block before:w-[23px] before:h-[20px] before:bg-cover ${data.approved ? "before:bg-filledHexschool" : "before:bg-thinBorderHexschool"} flex items-center gap-2`}>同意上述聲明及確認個人資料屬實。</p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center w-full">
          <span>簽名</span>
          <img src={data.signature} alt="signature" width={200} height={100} className="rounded-md"/>
          <p className="ml-auto">日期 {data.signatureUpdatedTime}</p>
        </div>
      </div>
    </section>
  )
}