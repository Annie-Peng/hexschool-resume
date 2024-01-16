import { commonRequiredMsg } from "./validationMsg";
import { cityOptions } from './cities';

export const resumeDataSet = {
  personalInfo: {
    title: "基本資料",
    formDataSet: [
      {
        hMsg: "個人大頭貼",
        name: "profile",
        component: "input",
        type: "file",
        accept: "image/png, image/jpeg, image/jpg",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "大頭照背景建議乾淨以正面照，人像在中間為主",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "姓名",
        name: "applicantName",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "姓名請填寫與身分證上一樣",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "電話",
        name: "phone",
        component: "input",
        type: "number",
        validation: {
          required: commonRequiredMsg,
          pattern: {
            value: /^09\d{8}$/,
            message: "手機格式錯誤",
          },
        },
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "個人Mail",
        name: "email",
        component: "input",
        type: "email",
        validation: {
          required: commonRequiredMsg,
          pattern: {
            value: "",
            message: "電子信箱格式錯誤",
          },
        },
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "目前工作職稱",
        name: "occupation",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "累積年資",
        name: "workingLength",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "針對此職位的職缺累積年資",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "期望薪資",
        name: "expectedSalary",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "請註記 年薪/月薪",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "個人簡歷",
        name: "aboutMe",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "重點陳述，盡量不要超過 300字",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "目前現居地",
        name: "currentCity",
        component: "select",
        validation: {
          required: commonRequiredMsg
        },
        disabledOption: "請選擇",
        options: cityOptions,
        errClass: "",
        selectClass: "",
        hClass: ""
      },
      {
        hMsg: "未來想要工作地",
        name: "futureCities",
        component: "multiSelect",
        validation: {
          required: commonRequiredMsg
        },
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        group: [
          {
            group: "graduateSchool",
            hMsg: "畢業學校",
            id: "id1",
            key: "name",
            name: "graduateSchool.id1.name",
            component: "input",
            validation: {
              required: commonRequiredMsg
            },
            errClass: "",
            inputClass: "",
            hClass: ""
          },
          {
            group: "graduateSchool",
            hMsg: "畢業科系",
            id: "id1",
            key: "major",
            name: "graduateSchool.id1.major",
            component: "input",
            validation: {
              required: commonRequiredMsg
            },
            errClass: "",
            inputClass: "",
            hClass: ""
          },
          {
            group: "graduateSchool",
            hMsg: "畢(肆)業時間",
            id: "id1",
            key: "leftTime",
            name: "graduateSchool.id1.leftTime",
            component: "selectDate",
            validation: {
              required: commonRequiredMsg
            },
            errClass: "",
            inputClass: "",
            hClass: ""
          },
        ]
      }
    ]
  },
  jobSkills: {
    title: "工作技能",
    formDataSet: [
      {
        group: [
          {
            group: "jobSkills",
            id: "id1",
            key: "name",
            name: "jobSkills.id1.name",
            component: "input",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "請自行敘述專業技能項目",
            errClass: "",
            inputClass: "",
            hClass: ""
          },
          {
            group: "jobSkills",
            id: "id1",
            key: "items",
            secondKey: "name",
            name: "jobSkills.id1.items.id1.name",
            component: "input",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "請自行敘述相關技能",
            errClass: "",
            inputClass: "",
            hClass: ""
          },
          {
            group: "jobSkills",
            id: "id1",
            key: "items",
            secondKey: "name",
            name: "jobSkills.id1.items.id2.name",
            component: "input",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "請自行敘述相關技能",
            errClass: "",
            inputClass: "",
            hClass: ""
          },
        ]
      },
    ]
  },
  jobExperience: {
    title: "工作經驗",
    formDataSet: [
      {
        hMsg: "公司名稱",
        name: "id1.company",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "請輸入公司完整名稱",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "公司職稱",
        name: "id1.occupation",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "請輸入職位名稱，例如：軟體工程師",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "任職時間",
        name: "id1.workingLength.startYear",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "起始年份(西元)",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        name: "id1.workingLength.startMonth",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "起始月份",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        name: "id1.workingLength.endYear",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "結束年份(西元)",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        name: "id1.workingLength.endMonth",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "結束月份",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        name: "id1.workingLength.isLeft",
        component: "input",
        type: "checkbox",
        validation: {
          required: commonRequiredMsg
        },
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "工作內容",
        name: "id1.description",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "簡要並條列式在這家公司主要職責和成就",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
      {
        hMsg: "工作成果",
        name: "id1.achievement",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "列在這份工作中主要作品成果",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
    ]
  },
  portfolio: {
    title: "專業作品",
    formDataSet: []
  },
  declaration: {
    title: "聲明事項",
    formDataSet: [
      {
        hMsg: "簽名",
        name: "signature",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "電子簽名",
        errClass: "",
        inputClass: "",
        hClass: ""
      },
    ]
  }
}

// components: input, select, selectDate, multiSelect

// placeholder, type, accept, hMsg, group, title, id, key, secondKey, disabledOption, options  為選填