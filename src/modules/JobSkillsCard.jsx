import { useFormContext } from "react-hook-form"
import FormInput from "../common/components/FormInput"
import { getNestedError } from "../common/helpers/getNestedError";

const JobSkillsCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { getValues, formState: { errors } } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="w-full">
        {Object.keys(data).map((subKey, index) => {
          const error = getNestedError(errors, `${dataName}.${subKey}`);

          return (
            <FormInput key={index} formDataSet={formDataSet} formClass={formClass[`jobSkills.items.${subKey}`]} dataName={`jobSkills.items.${subKey}`} name={`${dataName}.${subKey}`} error={error} edit={edit} validation={formDataSet[`jobSkills.items.${subKey}`]?.validation || ""}/>
          )
        })}
      </div>
    ) : (
      <div className="flex flex-col gap-2">
      {Object.keys(data).map((subKey, index) => (
          <p key={index}>
            {getValues(`${dataName}.${subKey}`) ? (
              getValues(`${dataName}.${subKey}`)
            ) : (
              "自行敘述技能"
            )}
          </p>
        ))}
      </div>
    ) }
    </>
  )
}

export default JobSkillsCard