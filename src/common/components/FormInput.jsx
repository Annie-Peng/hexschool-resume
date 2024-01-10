const FormInput = ({formData, register, error}) => {

  const { inputClass, labelClass, hClass, errClass, type, accept, hMsg, name, placeholder, validation } = formData;

  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        <h3 className={hClass}>{hMsg}</h3>
      </label>
      <input className={inputClass} id={name} name={name} type={type} accept={accept} placeholder={placeholder} {...register(name, validation)}/>
      {error && <p className={errClass}>{error.message}</p>}
    </div>
    );
}

export default FormInput;