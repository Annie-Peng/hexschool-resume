import Popup from "reactjs-popup";

const Modal = ({ btnText, children, modalClass }) => {
  return (
    <Popup
          modal
          trigger={
            <button className="!w-[120px] btn borderPrimaryBtn ml-auto block" type="button">
              {btnText}
            </button>
          }
          closeOnDocumentClick={true}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
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