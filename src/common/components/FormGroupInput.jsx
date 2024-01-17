const FormGroupInput = ({ groupDataSet, register, errors}) => {

  if(!groupDataSet) return;

  return (
    <div className={`flex flex-col`}>
        {groupDataSet.map((data, index)=>{
            const { inputClass, labelClass, hClass, errClass, type, accept, hMsg, name, placeholder, validation, required, id, key } = data;

            const requiredClass = required !== false && "after:content-['*'] after:ml-0.5 after:text-red-500";

          return (
            <>
              {index === 0 && <hr className="my-2 w-[95%] mx-auto"/>}
              <div key={index} className="flex items-center relative">
                <div className="flex items-center w-full gap-2 p-2">
                  <label className={`w-1/4 text-right ${labelClass}`} htmlFor={name}>
                    <h3 className={`resumeH3 ${hClass} ${requiredClass}`}>{hMsg}</h3>
                  </label>
                  <input className={inputClass} id={name} name={name} type={type} accept={accept} placeholder={placeholder} {...register(name, validation)}/>
                  {errors && <p className={`text-sm text-red-500 ${errClass}`}>{errors?.[id]?.[key]?.message}</p>}
                </div>
                {index === 0 && (
                  <div className="flex gap-2 absolute right-[20px]">
                    <button className="addBtn btn" type="button">+</button>
                    <button className="deleteBtn btn" type="button" >-</button>
                  </div>
                )}
              </div>
            </>
          )
        })}
      </div>
    )
}

export default FormGroupInput;