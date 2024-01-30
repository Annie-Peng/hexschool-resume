import { createContext, useReducer } from 'react';
import FormReducer, { initialState } from './FormReducer';
import { useEffect } from 'react';
import { localStorageTest } from '../../dataSet/testDataSet';

export const FormContext = createContext(initialState);

export const FormProvider = ({children}) => {

  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { declaration, jobExperience, jobSkills, personalInfo, portfolio } = state;
  
  useEffect(()=>{
    dispatch({
      type: "updateForm",
      payload: localStorageTest
    })
  },[])

  const updateSection = (data) => { // 在這裡整理資料，再傳進去
    dispatch({
      type: "updateSection",
      payload: data
    })
  }

  const value = {
    declaration,
    jobExperience,
    jobSkills,
    personalInfo,
    portfolio,
    updateSection
  }

  return (
    <FormContext.Provider value={value}>
      <main className="container flex flex-col md:w-2/3 lg:w-1/2 gap-20 py-10">
        {children}
      </main>
    </FormContext.Provider>
  )
}