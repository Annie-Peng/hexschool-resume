import { commonPositiveNumMsg, commonRequiredMsg } from "./validationMsg";
import { cityOptions } from './cities';

export const resumeDataSet = {
  personalInfo: {
    title: "基本資料",
    formDataSet: {
      profile: {
        hMsg: "個人大頭貼",
        component: "inputImg",
        type: "file",
        accept: "image/png, image/jpeg, image/jpg",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "大頭照背景建議乾淨以正面照，人像在中間為主",
      },
      applicantName: {
        hMsg: "姓名",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "姓名請填寫與身分證上一樣",
      },
      phone: {
        hMsg: "電話",
        component: "input",
        type: "number",
        validation: {
          required: commonRequiredMsg,
          pattern: {
            value: /^09\d{8}$/,
            message: "手機格式錯誤",
          },
        },
        placeholder: "請輸入10碼數字",
      },
      email: {
        hMsg: "個人Mail",
        component: "input",
        type: "email",
        validation: {
          required: commonRequiredMsg,
          pattern: {
            value: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
            message: "電子信箱格式錯誤",
          },
        },
      },
      occupation: {
        hMsg: "目前工作職稱",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
      },
      workingLength: {
        hMsg: "累積年資",
        component: "input",
        type: "number",
        validation: {
          required: commonRequiredMsg,
          min: { 
            value: 1,
            message: commonPositiveNumMsg
          }
        },
        placeholder: "針對此職位的職缺累積年資",
      },
      expectedYearSalary: {
        hMsg: "期望薪資(年薪/萬)",
        component: "input",
        type: "number",
        validation: {
          required: commonRequiredMsg,
          min: { 
            value: 1,
            message: commonPositiveNumMsg
          }
        },
        placeholder: "請輸入數字",
      },
      expectedMonthSalary: {
        hMsg: "期望薪資(月薪/萬)",
        component: "input",
        type: "number",
        validation: {
          required: commonRequiredMsg,
          min: { 
            value: 1,
            message: commonPositiveNumMsg
          }
        },
        placeholder: "請輸入數字",
      },
      aboutMe: {
        hMsg: "個人簡歷",
        component: "editor",
        type: "text",
        required: false,
        validation: {
          maxLength: {
            value: 300,
            message: "不得超過300字"
          }
        },
        placeholder: "重點陳述，盡量不要超過 300 字",
      },
      currentCity: {
        hMsg: "目前現居地",
        component: "select",
        validation: {
          required: commonRequiredMsg
        },
        others: {
          isMulti: false
        },
        disabledOption: "請選擇",
        options: cityOptions,
      },
      futureCities: {
        hMsg: "未來想要工作地",
        component: "select",
        validation: {
          required: commonRequiredMsg,
        },
        others: {
          valuesMaxLength: 3,
          isMulti: true
        },
        disabledOption: "請選擇",
        options: [{ option: "不拘", value: "不拘" }, ...cityOptions],
      },
      "graduateSchool.name": {
        hMsg: "畢業學校",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "例如：最高學歷",
      },
      "graduateSchool.major": {
        hMsg: "畢業科系",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "例如：資訊工程學系",
      },
      "graduateSchool.leftTime": {
        hMsg: "畢(肆)業時間",
        id: "id1",
        key: "leftTime",
        type: "month",
        component: "input",
        validation: {
          required: commonRequiredMsg
        },
      }
    }
  },
  jobSkills: {
    title: "工作技能",
    formDataSet: {
      "jobSkills.name": {
        group: "jobSkills",
        id: "id1",
        key: "name",
        hMsg: "專業技能",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "例如：前端框架",
      },
      "jobSkills.items.name": {
        group: "jobSkills",
        id: "id1",
        key: "items",
        secondKey: "name",
        hMsg: "技能描述",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "",
      },
    },
  },
  jobExperience: {
    title: "工作經驗",
    formDataSet: {
      "jobExperience.company": {
        group: "jobExperience",
        hMsg: "公司名稱",
        id: "id1",
        key: "company",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "請輸入公司完整名稱",
      },
      "jobExperience.occupation": {
          group: "jobExperience",
          hMsg: "公司職稱",
          id: "id1",
          key: "occupation",
          component: "input",
          type: "text",
          validation: {
            required: commonRequiredMsg
          },
          placeholder: "請輸入職位名稱，例如：軟體工程師",
        },
      "jobExperience.workingLength.startTime": {
        group: "jobExperience",
        id: "id1",
        key: "workingLength",
        item: "startTime",
        component: "input",
        type: "month",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "起始年月",
      },
      "jobExperience.workingLength.endTime": {
        group: "jobExperience",
        id: "id1",
        key: "workingLength",
        item: "endTime",
        component: "input",
        type: "month",
        validation: {
          required: commonRequiredMsg
        },
        required: false,
        placeholder: "結束年月",
      },
      "jobExperience.workingLength.isLeft": {
        group: "jobExperience",
        id: "id1",
        key: "workingLength",
        item: "isLeft",
        component: "input",
        type: "checkbox",
        required: false,
      },
      "jobExperience.description": {
        group: "jobExperience",
        hMsg: "工作內容",
        id: "id1",
        key: "description",
        component: "editor",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "簡要並條列式在這家公司主要職責和成就",
      },
      "jobExperience.achievement": {
        group: "jobExperience",
        hMsg: "工作成果",
        id: "id1",
        key: "achievement",
        component: "editor",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "列在這份工作中主要作品成果",
      }
    }
  },
  portfolio: {
    title: "專業作品",
    formDataSet: {
      "portfolio.name": {
        group: "portfolio",
        id: "id1",
        key: "name",
        hMsg: "專業作品",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "",
        },
      "portfolio.items.url": {
        group: "portfolio",
        id: "id1",
        key: "items",
        secondKey: "url",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "",
        hMsg: "作品網址"
      },
      "portfolio.items.description": {
        group: "portfolio",
        id: "id1",
        key: "items",
        secondKey: "description",
        component: "editor",
        type: "text",
        required: false,
        placeholder: "請填寫作品相關敘述",
        hMsg: "作品描述"
      },
      "portfolio.items.functions": {
        group: "portfolio",
        id: "id1",
        key: "items",
        type: "text",
        secondKey: "functions",
        component: "editor",
        required: false,
        placeholder: "請填寫功能相關敘述",
        hMsg: "作品功能"
      },
    },
  },
  declaration: {
    title: "聲明事項",
    formDataSet: {
      approved: {
        component: "input",
        type: "checkbox",
        required: false
      },
      signature: {
        hMsg: "簽名",
        component: "sign",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "電子簽名",
      }
    }
  }
}
