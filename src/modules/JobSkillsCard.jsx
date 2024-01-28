import { useFormContext } from "react-hook-form"
import Input from "../common/components/refactor/Input"

const JobSkillsCard = ({formDataSet, data, dataName, error, edit}) => {

  const { getValues } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="w-full">
        {Object.keys(data).map((subKey, index) => (
          <Input key={index} formDataSet={formDataSet} dataName={`jobSkills.items.${subKey}`} name={`${dataName}.${subKey}`} error={error} edit={edit}/>
        ))}
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