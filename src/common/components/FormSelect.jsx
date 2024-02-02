import { useFormContext } from "react-hook-form";
import { requiredClass } from "../../dataSet/validationMsg";

const FormSelect = ({formDataSet, dataName, name, error, formClass, edit}) => {

  let newDataName = dataName ? dataName : name;

  const { register, getValues } = useFormContext();
  const { hMsg, disabledOption, options, validation, required } = formDataSet[newDataName];
  const { selectClass, errClass, } = formClass;

  return (
    <div className="flex items-center gap-2 p-2">
      <label className="w-[20%] flex-shrink-0 text-right" htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
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
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
    );
}

export default FormSelect;