import Popup from "reactjs-popup";

{/* 套件 Reactjs-popup, https://www.npmjs.com/package/reactjs-popup */}
{/* 彈跳視窗 */}
const Modal = ({ btnText, children, modalClass }) => {
  return (
    <Popup
          modal
          // 觸發Popup的元素
          trigger={
            <button className="!w-[120px] btn borderPrimaryBtn ml-auto block" type="button">
              {btnText}
            </button>
          }
          // 當overlay點擊時，是否關閉Popup
          closeOnDocumentClick={true}
          // Popup的背景樣式
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
          {/* 要跳出的資料在這邊輸入 */}
          {(close) => (
            <div className={`relative mx-auto ${modalClass}`}>
              {children(close)}
              <button onClick={close} className="absolute right-1 top-1 bg-close w-[40px] h-[40px] bg-contain" />
            </div>
          )}
      </Popup>
  )
}

export default Modal;