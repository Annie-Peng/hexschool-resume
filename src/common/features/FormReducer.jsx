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
    graduateSchool: {
      id1: {
        name: "",
        major: "",
        leftTime: ""
      }
    }
  },
  jobSkills: {
    id1: {
      name: "",
      items: {
        id1: {
          name: ""
        },
      }
    }
  },
  jobExperience: {
  },
  portfolio: {
  },
  declaration: {
    approved: false,
    signature: "",
		signatureBuiltTime: "",
    signatureUpdatedTime: "",
  }
}

const FormReducer = (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case "updateForm": {
      state = payload;
      localStorage.setItem("resumeData", JSON.stringify(state));
      return state
    }
    case "updateSection": {
      return {
        ...state,
        [payload.name]: payload.values
      }
    }
  }
  
}

export default FormReducer;