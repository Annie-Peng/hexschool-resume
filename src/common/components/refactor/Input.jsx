import { useFormContext } from "react-hook-form";
import { requiredClass } from "../../../dataSet/validationMsg";

const Input = ({formDataSet, formClass, dataName, name, error, edit}) => {

  const { register, getValues } = useFormContext()

  let newDataName = dataName ? dataName : name;

  const validation = formDataSet[newDataName].validation;

  const { type, accept, hMsg, placeholder, pMsg, disabled, required } = formDataSet[newDataName];

    const { inputClass,
      errClass,
      outerClass,
      hClass,
      pClass,
      labelClass } = formClass;

  return (
    <div className={`flex items-center p-2 gap-2 ${outerClass}`}>
      <label className={`w-[20%] flex-shrink-0 text-right ${labelClass}`} htmlFor={name}>
        <h3 className={`resumeH3 ${hClass} ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      { edit ? (
        <>
        <input className={`${error && "focus:outline-red-500"} ${inputClass}`} id={name} type={type} accept={accept} placeholder={placeholder} disabled={disabled} {...register(name, validation)} />
        {pMsg && <p className={pClass}>{pMsg}</p>}
        {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
        </>
      ) : (
        getValues(name)
      )}
    </div>
    );
}

export default Input;