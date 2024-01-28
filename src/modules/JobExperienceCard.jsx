import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../common/components/FormButtons";
import { controller } from "../dataSet/controller";
import { resumeStyleSet } from "../dataSet/resumeStyleSet";

const JobExperienceCard = ({ formDataSet, name, insertData, edit }) => {

  const { control, formState: {errors} } = useFormContext()

  const { fields, insert, remove } = useFieldArray({
    name,
    control
  })

  const btns = {
    hasAddBtn: true,
    hasDeleteBtn: true,
    hasDragBtn: true,
  }

  return (
    <div>
      <ul>
        {fields.map((filed, index) => {
          const keys = Object.keys(filed).filter(key => key !== 'id'); //id以外的key
          return (
            <li key={filed.id} className="relative">
              {keys.map((key) => {
                return Object.keys(filed[key]).map((subKey, subKeyIndex) => { 
                  const newName = `${name}.${index}.${key}.${subKey}`;
                  const dataName = `${name}.${subKey}`;

                  if(typeof filed[key][subKey] === "object" && subKey === "workingLength") {
                    return <WorkingLengthField key={subKeyIndex} dataSet={filed[key][subKey]} name={newName} dataName={dataName} formDataSet={formDataSet} edit={edit}/>
                  }

                  const RenderForm = controller[formDataSet[dataName]?.component]; // 選擇表單元件
                  const formClass = resumeStyleSet.jobExperience[dataName];

                  return (
                      <Fragment key={subKeyIndex}>
                        {RenderForm && <RenderForm formDataSet={formDataSet} name={newName} error={errors[newName]} formClass={formClass} edit={edit} dataName={dataName} />}
                      </Fragment>
                    )
                });
              })}
              {edit && (
                <FormButtons
                  btns={btns}
                  onAdd={() => {insert(index+1, {...insertData})}}
                  onDelete={() => fields.length > 1 ? remove(index) : null}
                />
              )} 
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default JobExperienceCard;

function WorkingLengthField ({dataSet, name, dataName, formDataSet, edit}) {

  const { formState: {errors} } = useFormContext()

  return (
    <div>
      {Object.keys(dataSet).map((key, index) => {
        const newDataName = `${dataName}.${key}`;

        const RenderForm = controller[formDataSet[newDataName]?.component]; // 選擇表單元件

        const formClass = resumeStyleSet.jobExperience[newDataName];

        return (
          <Fragment key={index}>
            {RenderForm && <RenderForm formDataSet={formDataSet} name={`${name}.${key}`} error={errors[name]} formClass={formClass} edit={edit} dataName={newDataName} />}
          </Fragment>
        )
      })}
    </div>
  )
}