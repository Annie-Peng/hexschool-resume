import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { requiredClass } from "../../dataSet/validationMsg";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

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

  const signBtnClass="btn hover:bg-primary-100";

  const clear = () => sigCanvas.current.clear();
  const save = (close) => {
    const updateSign = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(updateSign);
    setValue(name, updateSign);
    close();
  };

  useEffect(()=>{
    setImageURL(img);
  },[img])

  return (
    <>
    {/* 套件 Reactjs-popup, https://www.npmjs.com/package/reactjs-popup */}
    {/* 彈跳視窗 */}
      <Popup
          modal
          // 觸發Popup的元素
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
          // 當overlay點擊時，是否關閉Popup
          closeOnDocumentClick={true}
          // Popup的背景樣式
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        {/* 要跳出的資料在這邊輸入 */}
          {(close) => (
            <>
            {/* 套件 react-signature-canvas, https://www.npmjs.com/package/react-signature-canvas */}
            {/* 簽名檔 */}
              <SignaturePad
                  ref={sigCanvas}
                  canvasProps={{
                      className: "border-2 rounded-t-md bg-white mx-auto",
                      width: '600',
                      height: '300'
                  }}
              />
              <div className="flex gap-2 p-2 bg-white rounded-b-md">
                <button className={signBtnClass} onClick={() => save(close)}>儲存</button>
                <button className={signBtnClass} onClick={clear}>清空</button>
                <button className={signBtnClass} onClick={close}>關閉</button>
              </div>
            </>
          )}
      </Popup>
    </>
  )
}

export default FormSign;