export const resumeStyleSet = {
  personalInfo: [
    {
      name: "profile",
      errClass: "",
      inputClass: "hidden",
      outerClass: "!items-start",
      hClass: "",
      imgData: {
        class: "absolute w-full h-full object-cover top-0 left-0",
        containerClass: "w-[150px] h-[200px] relative border-2 border-secondary-500 rounded-md text-secondary-500 p-2",
      }
    },
    {
      name: "applicantName",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "phone",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "email",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "occupation",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "workingLength",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "expectedSalary",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      name: "aboutMe",
      errClass: "",
      inputClass: "",
      hClass: "",
      labelClass: "self-start"
    },
    {
      name: "currentCity",
      errClass: "",
      selectClass: "",
      hClass: ""
    },
    {
      name: "futureCities",
      errClass: "",
      inputClass: "",
      hClass: ""
    },
    {
      outerClass: "flex flex-wrap items-center w-full",
      containerClass: "w-full",
      group: [
        {
          name: "graduateSchool.id1.name",
          errClass: "",
          inputClass: "",
          hClass: ""
        },
        {
          name: "graduateSchool.id1.major",
          errClass: "",
          inputClass: "",
          hClass: ""
        },
        {
          name: "graduateSchool.id1.leftTime",
          errClass: "",
          inputClass: "",
          hClass: ""
        },
      ]
    },
  ],
  jobSkills: [
    {
      outerClass: "",
      containerClass: "flex flex-col",
      group: [
        {
          name: "jobSkills.id1.name",
          errClass: "",
          inputClass: "!w-fit",
          labelClass: "w-fit",
          hClass: "",
        },
        {
          name: "jobSkills.id1.items.id1.name",
          errClass: "",
          inputClass: "!w-full",
          labelClass: "w-fit",
          hClass: "",
        },
      ],
    },
  ],
  jobExperience: [
    {
      group: [
        {
          name: "jobExperience.id1.company",
          errClass: "",
          inputClass: "",
          hClass: ""
        },
        {
          name: "jobExperience.id1.occupation",
          errClass: "",
          inputClass: "",
          hClass: ""
        },
        {
          groupTitle: "任職時間",
          groupTitleClass: "requiredMark",
          outerClass: "flex gap-2 p-2",
          containerClass: "w-3/4 flex flex-wrap",
          group: [
            {
              name: "jobExperience.id1.workingLength.startYear",
              errClass: "hidden",
              inputClass: "!w-[100px] mr-2",
              hClass: "",
              labelClass:"hidden",
              outerClass: "w-1/3 px-0 ",
            },
            {
              name: "jobExperience.id1.workingLength.startMonth",
              errClass: "hidden",
              inputClass: "!w-[100px] mr-2",
              hClass: "",
              labelClass: "hidden",
              outerClass: "w-2/3 px-0",
            },
            {
              name: "jobExperience.id1.workingLength.endYear",
              errClass: "hidden",
              inputClass: "!w-[100px] mr-2",
              hClass: "",
              labelClass: "hidden",
              outerClass: "w-1/3 px-0",
            },
            {
              name: "jobExperience.id1.workingLength.endMonth",
              errClass: "hidden",
              inputClass: "!w-[100px] mr-2",
              hClass: "",
              labelClass: "hidden",
              outerClass: "w-2/3 px-0",
            },
            {
              name: "jobExperience.id1.workingLength.isLeft",
              errClass: "ml-[60px]",
              inputClass: "after:top-1/2 after:-translate-y-1/2 after:ml-[20px] after:absolute after:content-['仍在職']",
              hClass: "hidden",
              labelClass: "!w-fit",
              outerClass: "w-full h-[40px] relative px-0",
            },
          ]
        },
        {
          name: "jobExperience.id1.description",
          errClass: "",
          inputClass: "",
          hClass: "",
          labelClass: "self-start"
        },
        {
          name: "jobExperience.id1.achievement",
          errClass: "",
          inputClass: "",
          hClass: "",
          labelClass: "self-start"
        },
      ]
    }
  ],
  portfolio: [
    {
      outerClass: "",
      containerClass: "w-full flex flex-col",
      group: [
        {
          name: "portfolio.id1.name",
          errClass: "",
          inputClass: "!w-fit",
          labelClass: "w-fit",
          hClass: "",
          outerClass: "p-0"
        },
        {
          outerClass: "ml-auto w-[96%] border-2 border-secondary-500 rounded-md m-2",
          containerClass: "flex flex-col py-6",
          group: [
            {
              name: "portfolio.id1.items.id1.url",
              errClass: "",
              inputClass: "",
              hClass: "",
            },
            {
              name: "portfolio.id1.items.id1.description",
              errClass: "",
              inputClass: "",
              hClass: "",
            },
            {
              name: "portfolio.id1.items.id1.functions",
              errClass: "",
              inputClass: "",
              hClass: "",
            },
          ]
        },
      ],
    },
  ],
  declaration: [
    {
      name: "approved",
      errClass: "",
      inputClass: "relative after:content-['同意上述聲明及確認個人資料屬實。'] after:absolute after:left-[20px] after:top-1/2 after:-translate-y-1/2 after:whitespace-nowrap",
      hClass: "",
      labelClass: "hidden",
      outerClass: "w-full px-0 my-4"
    },
    {
      name: "signature",
      errClass: "",
      inputClass: "",
      hClass: "!text-black text-left",
      outerClass: "px-0",
      imgData: {
        class: "w-[200px] h-[100px] rounded-md",
        containerClass: " w-1/2 border-2 border-secondary-500 rounded-md text-secondary-500 p-2 text-center",
      }
    },
  ]
};