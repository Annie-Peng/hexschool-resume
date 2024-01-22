import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { requiredClass } from "../../dataSet/validationMsg";

const FormSign = ({formData, getValues, setValue, formClass}) => {

  const { hMsg, name, placeholder, required } = formData;
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
              <label className={`w-1/4 text-right ${labelClass}`} htmlFor={name}>
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
                          className: "border bg-white",
                      }}
                  />
                  <div className="flex gap-2">
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