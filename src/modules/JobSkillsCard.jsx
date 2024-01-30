import { useFormContext } from "react-hook-form"
import Input from "../common/components/refactor/Input"
import { getNestedError } from "../common/components/helper/getNestedError";

const JobSkillsCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { getValues, formState: { errors } } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="w-full">
        {Object.keys(data).map((subKey, index) => {
          const error = getNestedError(errors, `${dataName}.${subKey}`);

          return (
            <Input key={index} formDataSet={formDataSet} formClass={formClass[`jobSkills.items.${subKey}`]} dataName={`jobSkills.items.${subKey}`} name={`${dataName}.${subKey}`} error={error} edit={edit}/>
          )
        })}
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

export default JobSkillsCard