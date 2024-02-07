import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "./FormButtons";
import FormInput from "./FormInput";
import Drag from "./Drag";
import { Draggable } from "react-beautiful-dnd";

const GroupInput = ({ formDataSet, name, insertData, edit }) => {

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

  return (
    <Drag move={move}>
      {(provided)=>(
        <>
          { edit &&  <hr className="border-dashed border-2 my-4"/> }
          <ul
            className="gap-4 flex flex-col"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
                <li key={field.id}
                  className={`relative`}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  >
                {keys.map(key => {
                  return Object.keys(field[key]).map(subKey => { 
                    const newName = `${name}.${index}.${key}.${subKey}`;
                    const dataName = `${name}.${subKey}`;
                    const formClass = `resumeStyleSet.${dataName}`
                    return ( //第二個key
                    <Fragment key={subKey}>
                      <FormInput
                        formDataSet={formDataSet}
                        formClass={formClass}
                        dataName={dataName}
                        name={newName}
                        edit={edit}
                        error={errors?.[name]?.[index]?.[key]?.[subKey]}
                        validation={formDataSet[dataName].validation}
                      />
                      { edit && (
                        <FormButtons
                          btns={btns}
                          onAdd={() => {insert(index+1, {...insertData})}}
                          onDelete={() => fields.length > 1 ? remove(index) : null}
                          dragProvided={{...provided.dragHandleProps}}
                          tooltip={{
                            add: "新增",
                            delete: "刪除",
                            drag: "拖曳"
                          }}
                        />
                      )}
                    </Fragment>
                  )
                  });
                  })}
                </li>
              )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
        </>
      )}
    </Drag>
  )
}

export default GroupInput;