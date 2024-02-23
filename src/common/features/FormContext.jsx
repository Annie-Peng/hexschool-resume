import { createContext, useReducer } from 'react';
import FormReducer, { initialState } from './FormReducer';
import { useEffect } from 'react';
import { useState } from 'react';

export const FormContext = createContext(initialState);

export const FormProvider = ({children}) => {

  const [state, dispatch] = useReducer(FormReducer, initialState);
  const [edit, setEdit] = useState(true);
  const { declaration, jobExperience, jobSkills, personalInfo, portfolio } = state;
  const getResumeData = JSON.parse(localStorage.getItem('resumeData'));

  useEffect(()=>{
      dispatch({
        type: "updateForm",
        payload: getResumeData ? getResumeData : initialState
      })
  },[])

  const updateSection = (data) => { // 在這裡整理資料，再傳進去
    dispatch({
      type: "updateSection",
      payload: data
    });
    const getResumeData = JSON.parse(localStorage.getItem('resumeData'));
    const newGetResumeData = { ...getResumeData, [data.name]: data.values};
    localStorage.setItem("resumeData", JSON.stringify(newGetResumeData));
  }

  const value = {
    declaration,
    jobExperience,
    jobSkills,
    personalInfo,
    portfolio,
    updateSection,
    edit,
    setEdit
  }

  return (
    <FormContext.Provider value={value}>
      <main className="container flex flex-col md:w-2/3 lg:w-1/2 gap-20 py-10">
        {children}
      </main>
    </FormContext.Provider>
  )
}