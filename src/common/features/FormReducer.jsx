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
    id1: {
      company: "",
      occupation: "",
      workingLength: {
        startYear: "",
        startMonth: "",
        endYear: "",
        endMonth: "",
        isLeft: false
      },
      description: "",
      achievement: ""
    },
  },
  portfolio: {
    id1: {
      name: "",
      items: {
        id1: {
          link: "",
          description: "",
          function: ""
        },
      }
    },
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