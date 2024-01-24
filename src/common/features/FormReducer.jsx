export const initialState = {
  personalInfo: {
    profile: "",
    applicantName: "",
    phone: "",
    email: "",
    occupation: "",
    workingLength: "",
    expectedSalary: "",
    aboutMe: "",
    currentCity: "",
    futureCities: "",
    graduateSchool: "",
    graduateMajor: "",
    leaveSchoolTime: ""
  },
  jobSkills: {},
  jobExperience: {},
  portfolio: {},
  declaration: {
    approved: false,
    signature: "",
		signatureBuiltTime: "",
    signatureUpdatedTime: "",
  }
}

const FormReducer = (state, action) => {

  const { type, payload } = action;

  console.log(payload);

  switch (type) {
    case "updateForm": {
      return {
        ...state,
        [payload.name]: payload.values
      }
    }
  }
  
}

export default FormReducer;