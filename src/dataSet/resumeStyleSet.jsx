export const resumeStyleSet = {
  personalInfo: {
    profile: {
      errClass: "",
      inputClass: "hidden",
      outerClass: "!items-start",
      hClass: "",
      imgData: {
        class: "absolute w-full h-full object-cover top-0 left-0",
        containerClass: "w-[150px] h-[200px] relative border-2 border-secondary-500 rounded-md text-secondary-500 p-2",
      }
    },
    applicantName: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    phone: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    email: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    occupation: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    workingLength: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    expectedSalary: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    aboutMe: {
      errClass: "",
      inputClass: "",
      hClass: "",
      labelClass: "self-start"
    },
    currentCity: {
      errClass: "",
      selectClass: "",
      hClass: ""
    },
    futureCities: {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    "graduateSchool.name": {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    "graduateSchool.major": {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    "graduateSchool.leftTime": {
      errClass: "",
      inputClass: "",
      hClass: ""
    }
  },
  jobSkills: {
    "jobSkills.name": {
      errClass: "",
      inputClass: "!w-fit",
      labelClass: "w-fit",
      hClass: "",
    },
    "jobSkills.items.name": {
      errClass: "",
      inputClass: "!w-[70%]",
      labelClass: "w-fit",
      hClass: "",
    }
  },
  jobExperience: {
    "jobExperience.company": {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    "jobExperience.occupation": {
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    "jobExperience.workingLength.startTime": {
      errClass: "whitespace-nowrap",
      inputClass: "",
      hClass: "",
      labelClass:"hidden",
      outerClass: "px-0",
    },
    "jobExperience.workingLength.endTime": {
      errClass: "whitespace-nowrap",
      inputClass: "",
      hClass: "",
      labelClass: "hidden",
      outerClass: "px-0",
    },
    "jobExperience.workingLength.isLeft": {
      errClass: "",
      inputClass: "after:top-1/2 after:-translate-y-1/2 after:ml-[20px] after:absolute after:content-['仍在職'] after:whitespace-nowrap",
      hClass: "hidden",
      labelClass: "hidden",
      outerClass: "w-[80px] h-[40px] relative",
    },
    "jobExperience.description":{
      errClass: "",
      inputClass: "",
      hClass: "",
      labelClass: "self-start"
    },
    "jobExperience.achievement":{
      errClass: "",
      inputClass: "",
      hClass: "",
      labelClass: "self-start"
    },
  },
  portfolio: {
    "portfolio.name": {
          errClass: "",
          inputClass: "!w-fit",
          labelClass: "w-fit",
          hClass: "",
          outerClass: "p-0"
        },
    "portfolio.items.url": {
      errClass: "",
      inputClass: "",
      hClass: "",
    },
    "portfolio.items.description": {
      errClass: "",
      inputClass: "",
      hClass: "",
    },
    "portfolio.items.functions": {
      errClass: "",
      inputClass: "",
      hClass: "",
    }
  },
  declaration: {
    approved: {
      errClass: "",
      inputClass: "relative after:content-['同意上述聲明及確認個人資料屬實。'] after:absolute after:left-[20px] after:top-1/2 after:-translate-y-1/2 after:whitespace-nowrap", 
      hClass: "",
      labelClass: "hidden",
      outerClass: "w-full px-0 my-4",
    },
    signature: {
      errClass: "",
      inputClass: "",
      hClass: "!text-black text-left",
      outerClass: "px-0 w-[200px] h-[100px]",
      labelClass: "w-fit",
      imgData: {
        class: "w-[200px] h-[100px] rounded-md",
        containerClass: " w-full border-2 border-secondary-500 rounded-md text-secondary-500 p-2 text-center",
      }
    }
  }
};