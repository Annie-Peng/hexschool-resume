import { useRef } from "react";
import useUploadImg from "../hook/useUploadImg";
import { requiredClass } from "../../dataSet/validationMsg";
import { useEffect } from "react";

const FormInputImg = ({formData, register, error, getValues, formClass, edit, setValue}) => {

  const { type, accept, hMsg, name, placeholder, validation, required, disabled } = formData;

  const { inputClass, errClass, outerClass, hClass, labelClass, imgData} = formClass;

  const img = getValues(name);
  const [fileSrc, handleUploadImg] = useUploadImg(img);
  const inputRef = useRef(null);

  useEffect(()=>{
    setValue(name, fileSrc)
  }, [fileSrc])

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
            {fileSrc ? <img src={fileSrc} className={imgData.class} alt={name} /> : <p>{placeholder}</p> }
          </div>
        </>
      ) : (
        <div className={`${imgData.containerClass} border-none`}>
          {fileSrc ? <img src={fileSrc} className={`${imgData.class} rounded-md`} alt={name} /> : <p>{placeholder}</p> }
        </div>
      )}
      {error && <p className={`resumeErr ${errClass}`}>{error.message}</p>}
    </div>
    );
}

export default FormInputImg;