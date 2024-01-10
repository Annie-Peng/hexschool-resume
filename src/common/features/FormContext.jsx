import { createContext, useReducer } from 'react';
import FormReducer, { initialState } from './FormReducer';

export const FormContext = createContext(initialState);

export const FormProvider = ({children}) => {

  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { declaration, jobExperience, jobSkills, personalInfo, portfolio } = state;

  const updateForm = (data) => { // 在這裡整理資料，再傳進去
    dispatch({
      type: "updateForm",
      payload: data
    })
  }

  const value = {
    declaration,
    jobExperience,
    jobSkills,
    personalInfo,
    portfolio,
    updateForm
  }

  return (
    <FormContext.Provider value={value}>{children}</FormContext.Provider>
  )
}