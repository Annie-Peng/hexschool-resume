import { requiredClass } from "../../dataSet/validationMsg";
import { useFormContext, Controller } from 'react-hook-form';
import Editor from "./Editor";
import MarkdownIdentifier from "./MarkdownIdentifier";

const FormEditor = ({formData, error, formClass, edit, getValues}) => {

  const { control } = useFormContext();

  const { hMsg, name, placeholder, validation, required } = formData;

  const { errClass, labelClass } = formClass;

  return (
    <div className="flex items-center gap-2 p-2">
      <label className={`w-[20%] flex-shrink-0 text-right ${labelClass}`} htmlFor={name}>
        <h3 className={`resumeH3 ${requiredClass(required)}`}>{hMsg}</h3>
      </label>
      {edit ? (
        <Controller
          name={name}
          control={control}
          rules={validation}
          render={({ field }) => (
            <Editor 
              {...field} 
              placeholder={placeholder} 
              error={error}
              errClass={errClass}
            />
          )}
        />
      ) : (
        <MarkdownIdentifier texts={getValues(name)} />
      ) }
    </div>
    );
}

export default FormEditor;