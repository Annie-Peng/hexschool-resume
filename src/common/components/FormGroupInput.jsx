import { Fragment } from "react";
import { controller } from "../../dataSet/controller";
import FormButtons from "./FormButtons";

const FormGroupInput = ({ groupDataSet, register, errors, ...props}) => {


  const { outerClass, containerClass, group, groupTitle, groupTitleClass, btns } = groupDataSet;

  return (
      <div className={`${outerClass}`}>
        {groupTitle && <h3 className={`resumeH3 w-1/4 text-right ${groupTitleClass}`}>{groupTitle}</h3>}
        <div className={`relative ${containerClass}`}>
          {group.map((formData, index)=>{

            const RenderForm = controller[formData.component]; // 選擇表單元件

            if(typeof formData.group === "object") { // group表單
              return <FormGroupInput key={index} groupDataSet={formData} register={register} errors={errors} {...props} />
            }

            const { id, key, item } = formData;

            return (
              <Fragment key={index}>
                  {RenderForm && <RenderForm formData={formData} register={register} error={ errors?.[id]?.[key]?.[item] || errors?.[id]?.[key] } />}
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