import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormButtons from "../FormButtons";
import Input from "./Input";

const SubGroupInput = ({ formDataSet, name, insertData, subInsertData, edit, children }) => {

  const { control, getValues } = useFormContext();
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
        {fields.map((item, index) => {
          const keys = Object.keys(item).filter(key => key !== 'id'); //id以外的key
          return (
            <Fragment key={item.id}>
                {keys.map((key, kIndex) => {
                  const titleName = `${name}.${index}.${key}`;
                  return (
                    <Fragment key={kIndex}>
                    {edit && index>0 && <hr className="border-dashed border-2 mt-8 mb-6"/>}
                    <li className="relative my-2">
                      {edit ? (
                        <>
                          <Input key={index} formDataSet={formDataSet} dataName={`${name}.name`} name={`${titleName}.name`} error={""} edit={edit}/>
                          <FormButtons
                            btns={btns}
                            onAdd={() => {insert(index+1, {...insertData})}}
                            onDelete={() => fields.length > 1 ? remove(index) : null}
                          />
                        </>
                        ) : (
                          <h3 className="relative py-4 after:absolute after:content-[''] after:w-full after:-z-10 after:h-[2px] after:block after:bg-secondary-500 after:right-0 after:top-1/2 after:-translate-y-1/2">
                            <span className="bg-white pr-2 text-primary-500 font-bold">{getValues(`${titleName}.name`)}</span>
                          </h3>
                      )}
                      <Card subName={`${titleName}.items`} edit={edit} subInsertData={subInsertData}>
                        {children}
                      </Card>
                    </li>
                  </Fragment>
                )
                })}
            </Fragment>
          );
        })}
      </ul>
    </div>
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