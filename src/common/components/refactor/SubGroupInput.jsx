import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../FormButtons";
import Input from "./Input";
import { getNestedError } from "../helper/getNestedError";
import Drag from "../Drag";
import { Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";

const SubGroupInput = ({ formDataSet, formClass, name, insertData, subInsertData, edit, children, requiredShowResume }) => {

  const { control, getValues, reset, formState: { errors } } = useFormContext();
  const { fields, insert, remove, move } = useFieldArray({
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
      {(provided)=>(
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
        {fields.map((field, index) => {
          const keys = Object.keys(field).filter(key => key !== 'id'); //id以外的key
          return (
            <Fragment key={field.id}>
              {edit && index>0 && <hr className="border-dashed border-2 mt-8 mb-6"/>}
              <Draggable
              draggableId={field.id}
              index={index}
              isDragDisabled={edit ? false : true}
              >
                {(provided)=>(
                  <li key={field.id}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  >
                    {keys.map((key, kIndex) => {
                      const titleName = `${name}.${index}.${key}`;
                      const dataName = `${name}.name`;
                      const error = getNestedError(errors, `${titleName}.name`);
                      
                    return (
                      <div className="relative my-2" key={kIndex}>
                        {edit ? (
                          <>
                            <Input key={index} formDataSet={formDataSet} formClass={formClass[dataName]} dataName={dataName} name={`${titleName}.name`} error={error} edit={edit} validation={formDataSet[dataName].validation}/>
                              <FormButtons
                              btns={btns}
                              onAdd={() => {insert(index+1, {...insertData})}}
                              onDelete={() => {
                                requiredShowResume ? (
                                  fields.length > 1 ? remove(index) : null
                                ) : (
                                  remove(index)
                                )
                              }}
                              dragProvided={{...provided.dragHandleProps}}
                            />
                          </>
                          ) : (
                            <h3 className="relative py-4 after:absolute after:content-[''] after:w-full after:-z-10 after:h-[2px] after:block after:bg-secondary-500 after:right-0 after:top-1/2 after:-translate-y-1/2">
                              <span className="bg-white pr-2 text-primary-500 font-bold">
                                {getValues(`${titleName}.name`) ? (
                                  getValues(`${titleName}.name`)
                                ) : (
                                  <span>自行填寫項目</span>
                                )}
                              </span>
                            </h3>
                        )}
                        <Card subName={`${titleName}.items`} edit={edit} subInsertData={subInsertData}>
                          {children}
                        </Card>
                      </div>
                    )
                  })}
                  </li>
                )}
              </Draggable>
            </Fragment>
          );
        })}
        {provided.placeholder}
      </ul>
      )}
    </Drag>
  )
}

export default SubGroupInput;

function Card ({subName, edit, children, subInsertData}) {

  const { control } = useFormContext();
  const { fields, insert, remove } = useFieldArray({
    name: subName,
    control
  })

  const btns = {
    hasAddBtn: true,
    hasDeleteBtn: true,
    hasDragBtn: false,
  }

    return (
        <ul className="flex flex-wrap gap-4 mt-4">
        {fields.map((item, index) => {
          const itemKeys = Object.keys(item).filter(key => key !== 'id');
          return (
            <Fragment key={item.id}>
              {itemKeys.map((key) => (
                <li key={key} className={`relative w-full flex ${!edit && "before:content-['#'] before:mx-2"}`}>
                  {children(item[key], `${subName}.${index}.${key}`)}
                  {edit &&
                    <FormButtons
                      btns={btns}
                      onAdd={() => insert(index + 1, { ...subInsertData })}
                      onDelete={() => fields.length > 1 ? remove(index) : null}
                    />
                  }
                </li>
              ))}
            </Fragment>
          );
        })}
      </ul>
    );
}