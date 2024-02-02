import { useRef } from "react";
import useUploadImg from "../hook/useUploadImg";
import { requiredClass } from "../../dataSet/validationMsg";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const FormInputImg = ({formDataSet, name, error, formClass, edit }) => {

  const { register, getValues, setValue, watch, trigger } = useFormContext();

  const { type, accept, hMsg, placeholder, validation, required, disabled } = formDataSet[name];

  const { inputClass, errClass, outerClass, hClass, labelClass, imgData} = formClass;

  const img = getValues(name);
  const watchValue = watch(name);
  const [fileSrc, setFileSrc, handleUploadImg] = useUploadImg(img);
  const inputRef = useRef(null);

  useEffect(()=>{
    if(edit) {
      setValue(name, fileSrc);
      trigger(name);
    }
  }, [fileSrc])

  useEffect(()=>{
    if(!edit){
      if(fileSrc !== img) {
        setFileSrc("")
      }
    }
  },[watchValue])


  return (
    <div className={`flex items-center p-2 gap-2 ${outerClass}`}>
      <label className={`w-[20%] flex-shrink-0 text-right ${labelClass}`} htmlFor={name}>
        <h3 className={`resumeH3 ${hClass} ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      { edit ? (
        <>
          <input className={`${error && "focus:outline-red-500"} ${inputClass}`} id={name} type={type} accept={accept} placeholder={placeholder} disabled={disabled} {...register(name, validation)} onChange={handleUploadImg} ref={inputRef}/>
          <div className={`${imgData.containerClass}`} onClick={()=>{
            inputRef.current.click();
          }}>
            {img ? <img src={fileSrc || img } className={imgData.class} alt={name} /> : <p>{placeholder}</p> }
          </div>
        </>
      ) : (
        <>
          {img ? (
            <div className={`${imgData.containerClass} border-none`}>
              <img src={img} className={`${imgData.class} rounded-md`} alt={name} /> 
            </div>
          )
          : null
          }
        </>
      )}
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
    );
}

export default FormInputImg;