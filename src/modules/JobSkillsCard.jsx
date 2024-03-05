import { useFormContext } from "react-hook-form"
import { getNestedError } from "../common/helpers/getNestedError";
import { controller } from "../dataSet/controller";

const JobSkillsCard = ({formDataSet, formClass, data, dataName, edit}) => {

  const { getValues, formState: { errors } } = useFormContext();

  return (
    <>
    {edit ? (
      <div className="w-full">
        {Object.keys(data).map((subKey, index) => {
          const error = getNestedError(errors, `${dataName}.${subKey}`);
          const RenderForm = controller[formDataSet[`jobSkills.items.${subKey}`]?.component]; // 選擇表單元件

          return (
              <RenderForm key={index} formDataSet={formDataSet} name={`${dataName}.${subKey}`} error={error} formClass={formClass[`jobSkills.items.${subKey}`]} edit={edit} dataName={`jobSkills.items.${subKey}`} validation={formDataSet[`jobSkills.items.${subKey}`]?.validation || ""} />
          )
        })}
      </div>
    ) : (
      <div className="flex gap-2 pl-[14%] before:content-['#']">
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