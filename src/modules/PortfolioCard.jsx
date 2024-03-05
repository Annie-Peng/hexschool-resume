import { useFormContext } from "react-hook-form";
import { getNestedError } from "../common/helpers/getNestedError";
import { controller } from "../dataSet/controller";

const PortfolioCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { formState: { errors } } = useFormContext();

  return (
    <div className="w-full">
      {Object.keys(data).map((subKey, index) => {
        const error = getNestedError(errors, `${dataName}.${subKey}`);
        const RenderForm = controller[formDataSet[`portfolio.items.${subKey}`]?.component]; // 選擇表單元件
        
        return (
          <RenderForm key={index} formDataSet={formDataSet} name={`${dataName}.${subKey}`} error={error} formClass={formClass[`portfolio.items.${subKey}`]} edit={edit} dataName={`portfolio.items.${subKey}`} validation={formDataSet[`portfolio.items.${subKey}`]?.validation || ""} />
        )
      })}
    </div>
  )
}

export default PortfolioCard