import { requiredClass } from "../../dataSet/validationMsg";

const FormSelect = ({formData, register, error, formClass, edit, getValues}) => {

  const { hMsg, name, disabledOption, options, validation, required } = formData;
  const { selectClass, errClass, } = formClass;

  return (
    <div className="flex items-center gap-2 p-2">
      <label className="w-1/3 text-right" htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      <div className="w-full">
        { edit ? (
          <select className={selectClass} {...register(name, validation)}>
          <option value="" disabled>
            {disabledOption}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.option}
            </option>
          ))}
        </select>
        ) : (
          getValues(name)
        ) }
      </div>
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
    );
}

export default FormSelect;