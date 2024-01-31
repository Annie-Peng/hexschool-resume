import { FormProvider } from "react-hook-form";

const Form = ({ children, formFunctions, edit, setEdit, onSubmit }) => {
  const { handleSubmit, reset } = formFunctions;

  return (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-center gap-4 mt-4">
            <button className="cancelledBtn btn" type="button" onClick={() => {
              setEdit(false);
              reset();
            }}>取消</button>
            <button className="saveBtn btn" type="submit">儲存</button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;