import { Fragment, useContext } from "react";
import { useForm } from 'react-hook-form';
import { controller } from "../dataSet/controller";
import { FormContext } from "../common/features/FormContext";
import { resumeDataSet } from '../dataSet/resumeDataSet';
import { resumeStyleSet } from '../dataSet/resumeStyleSet';
import { declarationTestDataSet } from "../dataSet/testDataSet";
import useCusForm from "../common/hook/useCusForm";


const Declaration = () => {

  const { declaration } = useContext(FormContext);
  const { formFunctions, formFunctions: { formState: {errors}, handleSubmit }, formDataSet, title } = useCusForm({
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
