import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../FormButtons";
import { btns } from "../../../dataSet/btns";
import Input from "./Input";

const GroupInput = ({ formDataSet, name, insertData, edit }) => {

  const { control, formState: {errors} } = useFormContext()

  const { fields, insert, remove } = useFieldArray({
    name,
    control
  })

  return (
    <div>
      {edit && <hr className="border-dashed"/>}
      <ul>
        {fields.map((filed, index) => {
          const keys = Object.keys(filed).filter(key => key !== 'id'); //id以外的key
          return (
            <li key={filed.id} className="relative">
              {keys.map(key => {
                return Object.keys(filed[key]).map(subKey => { 
                  const newName = `${name}.${index}.${key}.${subKey}`;
                  return ( //第二個key
                  <Fragment key={subKey}>
                    <Input
                      formDataSet={formDataSet}
                      dataName={`${name}.${subKey}`}
                      name={newName}
                      edit={edit}
                      error={errors?.[name]?.[index]?.[key]?.[subKey]}
                    />
                    { edit && (
                      <FormButtons
                        btns={btns[name]}
                        onAdd={() => {insert(index+1, {...insertData})}}
                        onDelete={() => fields.length > 1 ? remove(index) : null}
                      />
                    )}
                  </Fragment>
                )
                });
              })}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default GroupInput;