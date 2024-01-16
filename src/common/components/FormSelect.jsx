const FormSelect = ({formData, register, error}) => {

  const { selectClass, labelClass, hClass, errClass, hMsg, name, disabledOption, options, validation } = formData;

  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        <h3 className={hClass}>{hMsg}</h3>
      </label>
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
      {error && <p className={errClass}>{error.message}</p>}
    </div>
    );
}

export default FormSelect;