import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { resumeDataSet } from '../../dataSet/resumeDataSet';
import { resumeStyleSet } from '../../dataSet/resumeStyleSet';

const useCusForm = ({ defaultValues, formTitle }) => {
  const { title, formDataSet } = resumeDataSet[formTitle];
  const formClass = resumeStyleSet[formTitle];
  const [edit, setEdit] = useState(true);

  const formFunctions = useForm({ defaultValues });

  return { formFunctions, formDataSet, formClass, title, edit, setEdit };
};

export default useCusForm;