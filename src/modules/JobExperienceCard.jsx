import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../common/components/FormButtons";
import { controller } from "../dataSet/controller";
import { resumeStyleSet } from "../dataSet/resumeStyleSet";
import { requiredClass } from "../dataSet/validationMsg";
import Drag from "../common/components/Drag";
import { Draggable } from "react-beautiful-dnd";

const JobExperienceCard = ({ formDataSet, name, insertData, edit }) => {

  const { control, formState: {errors} } = useFormContext()
  const { fields, insert, remove, move } = useFieldArray({
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
    <Drag move={move}>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {fields.map((field, index) => {
              const keys = Object.keys(field).filter(key => key !== 'id'); //id以外的key
              return (
                <Draggable
                  key={field.id}
                  draggableId={field.id}
                  index={index}
                  isDragDisabled={edit ? false : true}
                  >
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      key={field.id} className="relative"
                    >
                      {keys.map((key) => {
                        return Object.keys(field[key]).map((subKey, subKeyIndex) => { 
                          const newName = `${name}.${index}.${key}.${subKey}`;
                          const dataName = `${name}.${subKey}`;
                          const error = errors.jobExperience?.[index]?.[key][subKey];
          
                          if(typeof field[key][subKey] === "object" && subKey === "workingLength") {
                            return (
                              <WorkingLengthField
                                key={subKeyIndex}
                                dataSet={field[key][subKey]}
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
                        <FormButtons
                          btns={btns}
                          onAdd={() => {insert(index+1, {...insertData})}}
                          onDelete={() => remove(index)}
                          dragProvided={{...provided.dragHandleProps}}
                          edit={edit}
                        />
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
    </Drag>
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