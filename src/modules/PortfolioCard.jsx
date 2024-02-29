import { useFormContext } from "react-hook-form";
import FormInput from "../common/components/FormInput"
import { getNestedError } from "../common/helpers/getNestedError";

const PortfolioCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { formState: { errors }, getValues } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="ml-auto w-[99%] border-2 border-secondary-500 rounded-md">
      <div className="relative flex flex-col py-6">
        {Object.keys(data).map((subKey, index) => {
          const error = getNestedError(errors, `${dataName}.${subKey}`);
          return (
            <FormInput key={index} formDataSet={formDataSet} formClass={`${formClass}.portfolio.items.${subKey}`} dataName={`portfolio.items.${subKey}`} name={`${dataName}.${subKey}`} error={error} edit={edit} validation={formDataSet[`portfolio.items.${subKey}`]?.validation || ""}/>
          )
        })}
      </div>
    </div>
    ) : (
      <div className="flex flex-col gap-2">
      {Object.keys(data).map((subKey, index) => (
          <p key={index}>
            {getValues(`${dataName}.${subKey}`) ? (
              getValues(`${dataName}.${subKey}`)
            ) : (
              <>
                {index===0 && "自行填寫作品資訊"}
              </>
            )}
          </p>
        ))}
      </div>
    ) }
    </>
  )
}

export default PortfolioCard