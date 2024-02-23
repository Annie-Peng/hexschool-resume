import { FormProvider } from "react-hook-form";

const Form = ({ children, formFunctions, edit, onSubmit }) => {
  const { handleSubmit, formState: { dirtyFields } } = formFunctions;

  const switchBtnClass = Object.keys(dirtyFields).length === 0 ? "borderPrimaryBtn" : "saveBtn";

  return (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-end gap-4 mt-4">
            <button className={`btn !w-[120px] ${switchBtnClass}`} type="submit">更新</button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;