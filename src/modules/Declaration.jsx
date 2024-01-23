import { Fragment, useContext } from "react";
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { declarationTestDataSet } from "../dataSet/testDataSet";
import useCusForm from "../common/hook/useCusForm";


const Declaration = () => {

  const { declaration } = useContext(FormContext);
  const { handleSubmit, formFunctions, formFunctions: { formState: {errors} }, formDataSet, title } = useCusForm({
    defaultValues: declarationTestDataSet,
    formTitle: "declaration"
  });

  const onSubmit = (values) => {
    console.log(values);
  }

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-center justify-between">
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
    <section>
      <h2 className="font-bold">聲明事項</h2>
      <ul>
        <li>
          1、本人同意多角人才基於就業服務之目的依法蒐集、處理、利用個人資料於任用相關作業之進行。
        </li>
        <li>
          2、本人確認所提供之個人資料及相關經歷均屬實，如有不實情形，願意承擔相應責任。 
        </li>
      </ul>
      <p>{data.approved ? "Y" : "N"} 同意上述聲明及確認個人資料屬實。</p>
      <div className="flex justify-between">
        <div>
          <span>簽名</span>
          <img src={data.signature} alt="signature"/>
        </div>
        <p>日期 {data.signatureUpdatedTime}</p>
      </div>
    </section>
  )
}