import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { requiredClass } from "../../dataSet/validationMsg";
import { useFormContext } from "react-hook-form";

const FormSign = ({formDataSet, dataName, name, formClass}) => {

  const { getValues, setValue, } = useFormContext();

  let newDataName = dataName ? dataName : name;

  const { hMsg, placeholder, required } = formDataSet[newDataName];
  const { imgData, outerClass,
    hClass,
    labelClass } = formClass;

  const img = getValues(name);
  const [imageURL, setImageURL] = useState(img);
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = (close) => {
    const updateSign = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(updateSign);
    setValue(name, updateSign);
    close();
  };

  return (
    <>
      <Popup
          modal
          trigger={
            <div className={`flex items-center gap-2 ${outerClass}`}>
              <label className={`w-[20%] flex-shrink-0 text-right ${labelClass}`} htmlFor={name}>
                <h3 className={`resumeH3 ${hClass} ${requiredClass(required)}`}>{hMsg}</h3>
              </label>
              {imageURL ? (
                  <img
                      src={imageURL}
                      alt={name}
                      className={imgData.class}
                  />
              ) : (
                <div className={`${imgData.containerClass}`}>
                  <p>{placeholder}</p>
                </div>
              )}
            </div>
          }
          closeOnDocumentClick={true}
      >
          {(close) => (
            <>
              <SignaturePad
                  ref={sigCanvas}
                  canvasProps={{
                      className: "border-2 rounded-md bg-white mx-auto",
                      width: '600',
                      height: '300'
                  }}
              />
              <div className="flex gap-2 bg-white">
                <button onClick={() => save(close)}>儲存</button>
                <button onClick={clear}>清空</button>
                <button onClick={close}>關閉</button>
              </div>
            </>
          )}
      </Popup>
    </>
  )
}

export default FormSign;