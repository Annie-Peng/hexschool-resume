const FormTextarea = ({formData, register, error}) => {

  const { textareaClass, labelClass, hClass, errClass, type, hMsg, name, placeholder, validation } = formData;

  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        <h3 className={hClass}>{hMsg}</h3>
      </label>
      <textarea className={textareaClass} id={name} name={name} type={type} placeholder={placeholder} {...register(name, validation)}/>
      {error && <p className={errClass}>{error.message}</p>}
    </div>
    );
}

export default FormTextarea;