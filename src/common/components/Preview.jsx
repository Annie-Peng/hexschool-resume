import { useContext } from "react";
import { FormContext } from "../features/FormContext";

const Preview = () => {

  const { edit, setEdit } = useContext(FormContext);

  return (
    <button className="cancelledBtn btn" type="button" onClick={() => {
      setEdit(!edit);
    }}>切換{edit ? "預覽" : "編輯"}</button>
  )
}

export default Preview;