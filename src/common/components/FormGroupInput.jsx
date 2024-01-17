import { Fragment } from "react";

const FormGroupInput = ({ groupDataSet, register, error}) => {

  if(!groupDataSet) return;

  return (
      <div>
        {groupDataSet.map((data, index)=>{
            const { inputClass, labelClass, hClass, errClass, type, accept, hMsg, name, placeholder, validation } = data;
          return (
            <Fragment key={index}>
              <label className={labelClass} htmlFor={name}>
                <h3 className={hClass}>{hMsg}</h3>
              </label>
              <input className={inputClass} id={name} name={name} type={type} accept={accept} placeholder={placeholder} {...register(name, validation)}/>
              {error && <p className={errClass}>{error.message}</p>}
            </Fragment>
          )
        })}
        <button type="button" >+ 增加</button>
        <button type="button" >- 刪除</button>
        <hr />
      </div>
    )
}

export default FormGroupInput;