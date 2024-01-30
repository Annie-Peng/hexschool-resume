import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { resumeDataSet } from '../../dataSet/resumeDataSet';
import { resumeStyleSet } from '../../dataSet/resumeStyleSet';

const useCusForm = ({defaultValues, formTitle, onSubmit}) => {

  const { title, formDataSet } = resumeDataSet[formTitle];
  const formClass = resumeStyleSet[formTitle];
  const [ edit, setEdit  ] = useState(false);

  const formFunctions = useForm({defaultValues});
  
  const { handleSubmit, reset } = formFunctions;

  const Form = ({ children }) => (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-center gap-4 mt-4">
          <button className="cancelledBtn btn" type="button" onClick={()=>{
            setEdit(false);
            reset();
          }}>取消</button>
          <button className="saveBtn btn" type="submit">儲存</button>
        </div>
        )}
      </form>
    </FormProvider>
  );

  return {handleSubmit, formFunctions, Form, formDataSet, formClass, title, edit, setEdit}
}

export default useCusForm;