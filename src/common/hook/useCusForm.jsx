import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from '../features/FormContext';
import { resumeDataSet } from '../../dataSet/resumeDataSet';

const useCusForm = ({defaultValues, formTitle}) => {

  const { title, formDataSet } = resumeDataSet[formTitle];
  const [ renderItem, setRenderItem ] = useState(formDataSet);
  const { updateForm } = useContext(FormContext);
  const { register, handleSubmit, formState: {errors}, unregister, getValues, setValue } = useForm({defaultValues});

  const onSubmit = (values) => {
    updateForm({name: formTitle, values})
    console.log(values);
  }

  const formFunctions = {
    register, handleSubmit, formState: {errors}, unregister, getValues, setValue
  }

  const Form = ({ children }) => (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
      <div className="flex justify-center gap-4 mt-4">
        <button className="cancelledBtn btn">取消</button>
        <button className="saveBtn btn">儲存</button>
      </div>
    </form>
  );

  return {formFunctions, Form, renderItem, setRenderItem, formDataSet, title}
}

export default useCusForm;