import { FormProvider } from "react-hook-form";

const Form = ({ children, formFunctions, edit, onSubmit }) => {
  const { handleSubmit } = formFunctions;

  return (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-end gap-4 mt-4">
            <button className="saveBtn btn" type="submit">更新</button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;