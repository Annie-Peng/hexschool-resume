import { useRef } from "react";
import useUploadImg from "../hook/useUploadImg";

const FormInputImg = ({formData, register, error, getValues}) => {

  const { inputClass, errClass, type, accept, hMsg, name, placeholder, validation, outerClass, hClass, required, disabled, labelClass, imgData } = formData;

  const img = getValues(name);
  const [fileSrc, handleUploadImg] = useUploadImg(img);
  const inputRef = useRef(null);

  const requiredClass = required !== false && "requiredMark"

  return (
    <div className={`flex items-center p-2 gap-2 ${outerClass}`}>
      <label className={`w-1/4 text-right ${labelClass}`} htmlFor={name}>
        <h3 className={`resumeH3 ${hClass} ${requiredClass}`}>{hMsg}</h3>
      </label>
      
      <input className={`${error && "focus:outline-red-500"} ${inputClass}`} id={name} name={name} type={type} accept={accept} placeholder={placeholder} disabled={disabled} {...register(name, validation)} onChange={handleUploadImg} ref={inputRef}/>
      <div className={`${imgData.containerClass}`} onClick={()=>{
        inputRef.current.click();
      }}>
        {fileSrc ? <img src={fileSrc} className={imgData.class} alt={name} /> : <p>{placeholder}</p> }
      </div>
      {error && <p className={`${errClass} text-sm text-red-500`}>{error.message}</p>}
    </div>
    );
}

export default FormInputImg;