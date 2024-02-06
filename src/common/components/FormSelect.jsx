import { Controller, useFormContext } from "react-hook-form";
import { requiredClass } from "../../dataSet/validationMsg";
import Select from "react-select";
import { useEffect } from "react";

const FormSelect = ({
  formDataSet,
  dataName,
  name,
  error,
  formClass,
  edit,
  validation,
}) => {
  let newDataName = dataName ? dataName : name;

  const { control, getValues, setValue } = useFormContext();
  const { hMsg, options, required, others, disabledOption } =
    formDataSet[newDataName];
  const { selectClass, errClass, labelClass } = formClass;

  const newOptions = options.map((option) => ({
    value: option.value,
    label: option.option,
  }));

  useEffect(() => {
    const value = getValues(name);
    let selectValue;
    if (others.isMulti && value !== "" && edit) {
      // 多選value處理
      selectValue = value.split(",").map((city) => ({
        value: city,
        label: city,
      }));
    } else if (!others.isMulti && value !== "" && edit) {
      // 單選value處理
      selectValue = { value: value, label: value };
    }
    setValue(name, selectValue);
  }, [edit]);

  return (
    <div className="flex items-center gap-2 p-2">
      <label
        className={`w-[20%] flex-shrink-0 text-right ${labelClass}`}
        htmlFor={name}
      >
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      {edit ? (
        <Controller
          name={name}
          control={control}
          rules={{
            ...validation,
            ...(others.valuesMaxLength && {
              validate: (value) => {
                return (
                  value.length <= others.valuesMaxLength ||
                  `不得超過${others.valuesMaxLength}項`
                );
              },
            }),
          }}
          render={({ field: { value, ...field } }) => {
            console.log(value);

            return (
              <Select
                isMulti={others.isMulti}
                value={value}
                options={newOptions}
                isSearchable={false}
                placeholder={`${disabledOption}
                  ${
                    others.valuesMaxLength
                      ? `(最多${others.valuesMaxLength}項)`
                      : ""
                  }
                  `}
                classNames={{
                  control: (state) => {
                    const focusClass = state.isFocused
                      ? "!border-primary-500"
                      : "!border-secondary-500";
                    const errorClass = error && "!border-red-500";
                    return `multiSelect ${focusClass} ${errorClass}`;
                  },
                  container: () => `${selectClass}`,
                }}
                {...field}
              />
            );
          }}
        />
      ) : (
        typeof getValues(name) === "string" && getValues(name)
      )}
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
  );
};

export default FormSelect;