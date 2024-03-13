import { Fragment, useEffect } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../common/components/FormButtons";
import { controller } from "../dataSet/controller";
import { resumeStyleSet } from "../dataSet/resumeStyleSet";
import { requiredClass } from "../dataSet/validationMsg";
import Drag from "../common/components/Drag";
import { Draggable } from "react-beautiful-dnd";
import { getNestedError } from "../common/helpers/getNestedError";

const JobExperienceCard = ({ formDataSet, name, insertData, edit }) => {

  const { control, formState: {errors}, reset } = useFormContext()
  const { fields, insert, remove, move } = useFieldArray({ // 動態表單 group CRUD, https://www.react-hook-form.com/api/usefieldarray/
    name,
    control
  })

  useEffect(()=>{ //useForm更新後重新渲染Form
    reset()
  }, [name])

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
        <div className="relative min-h-[60px]">
          {edit && (
            <FormButtons
              btns={btns}
              onAdd={() => {insert(0, {...insertData})}}
              tooltip={{
                add: "新增",
              }}
            />
          )}
        </div>
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
                  <Fragment key={index}>
                  {index>0 && <hr className="border-dashed border-2 my-4"/>}
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
            
                            const RenderForm = controller[formDataSet[dataName]?.component]; // 選擇表單元件
                            const formClass = resumeStyleSet.jobExperience[dataName];
            
                            return (
                                <Fragment key={subKeyIndex}>
                                  {RenderForm && <RenderForm formDataSet={formDataSet} name={newName} error={error} formClass={formClass} edit={edit} dataName={dataName} validation={formDataSet[dataName].validation}/>}
                                </Fragment>
                              )
                          });
                        })}
                        {edit && (
                            <FormButtons
                            btns={btns}
                            onAdd={() => {insert(index+1, {...insertData})}}
                            onDelete={() => remove(index)}
                            dragProvided={{...provided.dragHandleProps}}
                            tooltip={{
                              add: "新增",
                              delete: "刪除",
                              drag: "拖曳"
                            }}
                          />
                        )}
                      </li>
                    )}
                  </Draggable>
                </Fragment>
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

  const { watch, formState: { touchedFields }, clearErrors, setError, control, setValue } = useFormContext();

  const data = {
    required: true,
    groupTitle: "任職時間",
    groupTitleClass: "requiredMark",
    outerClass: "flex items-center p-2 gap-2",
  }
  
  const endTimeDisabled = watch(`${name}.isLeft`);
  const endTime = watch(`${name}.endTime`);
  const isLeftTouched = getNestedError(touchedFields, `${name}.isLeft`)

  useEffect(()=>{
    if(endTimeDisabled) {
      clearErrors(`${name}.endTime`);
      setValue(`${name}.endTime`, "");
    }else if (isLeftTouched && !endTime) {
      setError(`${name}.endTime`, { type: "required", message: "必填" });
    }
  },[endTimeDisabled, isLeftTouched])


  return (
    <div className={data.outerClass}>
      <label className={`w-[20%] flex-shrink-0 text-right`} htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(data.required)}`}>{data.groupTitle}</h3>
      </label>
      <div className="flex flex-wrap gap-2 items-center w-2/3">
        {Object.keys(dataSet).map((key, index) => {
          const newDataName = `${dataName}.${key}`;
          const RenderForm = controller[formDataSet[newDataName]?.component]; // 選擇表單元件
          const formClass = resumeStyleSet.jobExperience[newDataName];

          const disabled = (key === "endTime" && endTimeDisabled);
          const endTimeValidation = { required: (disabled ? false : "必填") }; 
          const validation = (key === "endTime" ? endTimeValidation : formDataSet[newDataName]?.validation ) || "";
          return (
            <Controller
              key={index}
              name={`${name}.${key}`}
              control={control}
              rules={validation} 
              render={() => (
                <Fragment key={index}>
                  {RenderForm && <RenderForm formDataSet={formDataSet} name={`${name}.${key}`} error={error?.[key]} formClass={formClass} edit={edit} dataName={newDataName} disabled={disabled} />}
                  { key === "startTime" && <p>至</p> }
                  { key === "startTime" &&
                    (!edit && endTimeDisabled && <p>今</p>)
                  }
                </Fragment>
              )}
            />
          )
        })}
      </div>
    </div>
  )
}