import { useEffect } from "react";
import { requiredClass } from "../../dataSet/validationMsg";
import { useState } from "react";

const FormInput = ({formData, register, error, formClass, watch, edit, getValues}) => {

  const { type, accept, hMsg, name, placeholder, validation, pMsg, required, disabled } = formData;
  const [ newDisabled, setNewDisabled ] = useState(disabled);

  const { inputClass,
    errClass,
    outerClass,
    hClass,
    pClass,
    labelClass } = formClass;

    useEffect(() => {
      const { name, group, id, key } = formData;
      if(name.includes("endYear") || name.includes("endMonth")){
        const watchItem = watch(`${group}.${id}.${key}.isLeft`);
        setNewDisabled(watchItem > 0 && true);
      }
    }, [watch]);

  return (
    <div className={`flex items-center p-2 gap-2 ${outerClass}`}>
      <label className={`w-1/4 text-right ${labelClass}`} htmlFor={name}>
        <h3 className={`resumeH3 ${hClass} ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      { edit ? (
        <>
          <input className={`${error?.message && "focus:outline-red-500 border-red-500"} ${inputClass}`} id={name} type={type} accept={accept} placeholder={placeholder} disabled={newDisabled} {...register(name, validation)} />
          {pMsg && <p className={pClass}>{pMsg}</p>}
          {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
        </>
      ) : (
        getValues(name)
      ) }
    </div>
    );
}

export default FormInput;