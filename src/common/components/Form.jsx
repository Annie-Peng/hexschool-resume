import { FormProvider } from "react-hook-form";
import Modal from "./Modal";
import { useContext } from "react";
import { FormContext } from "../features/FormContext";
import { initialState } from "../features/FormReducer";

const Form = ({ children, formFunctions, edit, onSubmit, formTitle }) => {
  const { handleSubmit, formState: { dirtyFields } } = formFunctions;
  const { updateSection } = useContext(FormContext);

  const switchBtnClass = Object.keys(dirtyFields).length === 0 ? "borderPrimaryBtn" : "saveBtn";

  const handleClearDataSet = (close) => {
    updateSection({name: formTitle, values: initialState[formTitle]});
    close();
  }

  return (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-end gap-2 mt-4">
            <div className="">
              <Modal btnText="清除">
                {(close)=>(
                  <div className="text-xl bg-white py-10 px-20 flex flex-col gap-4 rounded-md">
                    <p>請再次確認是否要清除資料</p>
                    <p>並同時更新JSON及履歷？</p>
                    <div className="mt-4 flex gap-4 justify-center">
                      <button type="button" className="btn borderPrimaryBtn !w-[120px]" onClick={()=>handleClearDataSet(close)}>確認</button>
                      <button type="button" className="btn saveBtn !w-[120px]" onClick={()=>close()}>取消</button>
                    </div>
                </div>
                )}
              </Modal>
            </div>
            <button className={`btn !w-[120px] ${switchBtnClass}`} type="submit">更新</button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;