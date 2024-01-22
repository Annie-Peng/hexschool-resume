import { requiredClass } from "../../dataSet/validationMsg";

const FormTextarea = ({formData, register, error, formClass}) => {

  const { type, hMsg, name, placeholder, validation, required } = formData;

  const { textareaClass, errClass } = formClass;

  return (
    <div className="flex items-center gap-2 p-2">
      <label className="w-1/4 text-right" htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      <textarea className={`${error && "focus:outline-red-500"} ${textareaClass}`} id={name} type={type} placeholder={placeholder} {...register(name, validation)}/>
      {error && <p className={`${errClass} text-sm text-red-500`}>{error.message}</p>}
    </div>
    );
}

export default FormTextarea;