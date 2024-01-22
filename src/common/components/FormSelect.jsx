import { requiredClass } from "../../dataSet/validationMsg";

const FormSelect = ({formData, register, error}) => {

  const { selectClass, errClass, hMsg, name, disabledOption, options, validation, required } = formData;

  return (
    <div className="flex items-center gap-2 p-2">
      <label className="w-1/3 text-right" htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      <div className="w-full">
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
      </div>
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
    );
}

export default FormSelect;