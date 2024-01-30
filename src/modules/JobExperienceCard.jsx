import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../common/components/FormButtons";
import { controller } from "../dataSet/controller";
import { resumeStyleSet } from "../dataSet/resumeStyleSet";
import { requiredClass } from "../dataSet/validationMsg";

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

  if(fields.length===0){
    const btns = {
      hasAddBtn: true,
      hasDeleteBtn: false,
      hasDragBtn: false,
    }
    return (
      <div className="relative">
        <ul className="relative min-h-[60px]">
          {edit && (
            <FormButtons
              btns={btns}
              onAdd={() => {insert(0, {...insertData})}}
            />
          )}
        </ul>
      </div>
    )
  }


  return (
    <ul>
      {fields.map((filed, index) => {
        const keys = Object.keys(filed).filter(key => key !== 'id'); //id以外的key
        return (
          <li key={filed.id} className="relative">
            {keys.map((key) => {
              return Object.keys(filed[key]).map((subKey, subKeyIndex) => { 
                const newName = `${name}.${index}.${key}.${subKey}`;
                const dataName = `${name}.${subKey}`;
                const error = errors.jobExperience?.[index]?.[key][subKey];

                if(typeof filed[key][subKey] === "object" && subKey === "workingLength") {
                  return (
                    <WorkingLengthField
                      key={subKeyIndex}
                      dataSet={filed[key][subKey]}
                      name={newName}
                      dataName={dataName}
                      formDataSet={formDataSet}
                      edit={edit}
                      error={error}
                    />
                  )
                }

                const RenderForm = controller[formDataSet[dataName].component]; // 選擇表單元件
                const formClass = resumeStyleSet.jobExperience[dataName];

                return (
                    <Fragment key={subKeyIndex}>
                      {RenderForm && <RenderForm formDataSet={formDataSet} name={newName} error={error} formClass={formClass} edit={edit} dataName={dataName} />}
                    </Fragment>
                  )
              });
            })}
            {edit && (
              <FormButtons
                btns={btns}
                onAdd={() => {insert(index+1, {...insertData})}}
                onDelete={() => remove(index)}
              />
            )} 
          </li>
        );
      })}
    </ul>
  )
}

export default JobExperienceCard;

function WorkingLengthField ({dataSet, name, dataName, formDataSet, edit, error}) {

  const data = {
    required: true,
    groupTitle: "任職時間",
    groupTitleClass: "requiredMark",
    outerClass: "flex items-center p-2 gap-2",
  }

  return (
    <div className={data.outerClass}>
      <label className={`w-[20%] flex-shrink-0 text-right`} htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(data.required)}`}>{data.groupTitle}</h3>
      </label>
        {Object.keys(dataSet).map((key, index) => {
          const newDataName = `${dataName}.${key}`;
          const RenderForm = controller[formDataSet[newDataName]?.component]; // 選擇表單元件
          const formClass = resumeStyleSet.jobExperience[newDataName];
          return (
            <Fragment key={index}>
              {RenderForm && <RenderForm formDataSet={formDataSet} name={`${name}.${key}`} dataNmae={`${dataName}.${key}`} error={error?.[key]} formClass={formClass} edit={edit} dataName={newDataName} />}
            </Fragment>
          )
        })}
        
    </div>
  )
}