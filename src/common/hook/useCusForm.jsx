import { useState, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormContext } from '../features/FormContext';
import { resumeDataSet } from '../../dataSet/resumeDataSet';
import { useEffect } from 'react';

const useCusForm = ({defaultValues, formTitle}) => {

  const { title, formDataSet } = resumeDataSet[formTitle];
  const [ renderItem, setRenderItem ] = useState(formDataSet);
  const { updateForm } = useContext(FormContext);
  const [ edit, setEdit  ] = useState(false);

  const formFunctions = useForm({defaultValues});
  
  const { handleSubmit, reset } = formFunctions;

  const onSubmit = (values) => {
    updateForm({name: formTitle, values})
    setEdit(false)
  }

  useEffect(() => {
      handleSubmit(onSubmit)();
  }, []);

  const Form = ({ children }) => (
    <FormProvider {...formFunctions}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {edit && (
          <div className="flex justify-center gap-4 mt-4">
          <button className="cancelledBtn btn" type="button" onClick={()=>{
            setEdit(false);
            reset(defaultValues);
          }}>取消</button>
          <button className="saveBtn btn" type="submit">儲存</button>
        </div>
        )}
      </form>
    </FormProvider>
  );

  return {handleSubmit, formFunctions, Form, renderItem, setRenderItem, formDataSet, title, edit, setEdit}
}

export default useCusForm;