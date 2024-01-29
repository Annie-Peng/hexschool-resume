import { useFormContext } from "react-hook-form";
import Input from "../common/components/refactor/Input"
import { getNestedError } from "../common/components/helper/getNestedError";

const PortfolioCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { formState: { errors }, getValues } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="ml-auto w-[96.5%] border-2 border-secondary-500 rounded-md">
      <div className="relative flex flex-col py-6">
        {Object.keys(data).map((subKey, index) => {
          const error = getNestedError(errors, `${dataName}.${subKey}`);
          return (
            <Input key={index} formDataSet={formDataSet} formClass={`${formClass}.portfolio.items.${subKey}`} dataName={`portfolio.items.${subKey}`} name={`${dataName}.${subKey}`} error={error} edit={edit}/>
          )
        })}
      </div>
    </div>
    ) : (
      <div className="flex flex-col gap-2">
      {Object.keys(data).map((subKey, index) => (
          <p key={index}>{getValues(`${dataName}.${subKey}`)}</p>
        ))}
      </div>
    ) }
    </>
  )
}

export default PortfolioCard