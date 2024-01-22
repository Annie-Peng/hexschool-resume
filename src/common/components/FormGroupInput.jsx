import { Fragment } from "react";
import { controller } from "../../dataSet/controller";
import FormButtons from "./FormButtons";

const FormGroupInput = ({ groupDataSet, register, errors, formClass, ...props}) => {

  const { group, groupTitle, btns } = groupDataSet;

  const { outerClass,
    containerClass,
    groupTitleClass } = formClass

  return (
      <div className={`${outerClass}`}>
        {groupTitle && <h3 className={`resumeH3 w-1/4 text-right ${groupTitleClass}`}>{groupTitle}</h3>}
        <div className={`relative ${containerClass}`}>
          {group.map((formData, index)=>{

            const RenderForm = controller[formData.component]; // 選擇表單元件

            if(typeof formData.group === "object") { // group表單
              return <FormGroupInput key={index} groupDataSet={formData} register={register} errors={errors} formClass={formClass.group[index]} {...props} />
            }

            const { id, key, item } = formData;

            return (
              <Fragment key={index}>
                  {RenderForm && <RenderForm formData={formData} register={register} error={ errors?.[id]?.[key]?.[item] || errors?.[id]?.[key] } formClass={formClass.group[index]}/>}
                  {index === 0 && (
                    <FormButtons btns={btns} />
                  )}
              </Fragment>
            )
          })}
        </div>
      </div>
    )
}

export default FormGroupInput;