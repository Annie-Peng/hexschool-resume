import { commonRequiredMsg } from "./validationMsg";
import { cityOptions } from './cities';

export const resumeDataSet = {
  personalInfo: {
    title: "基本資料",
    formDataSet: [
      {
        hMsg: "個人大頭貼",
        name: "profile",
        component: "inputImg",
        type: "file",
        accept: "image/png, image/jpeg, image/jpg",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "大頭照背景建議乾淨以正面照，人像在中間為主",
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
        placeholder: "請輸入10碼數字",
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
            value: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
            message: "電子信箱格式錯誤",
          },
        },
      },
      {
        hMsg: "目前工作職稱",
        name: "occupation",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg
        },
      },
      {
        hMsg: "累積年資",
        name: "workingLength",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg,
        },
        placeholder: "針對此職位的職缺累積年資",
      },
      {
        hMsg: "期望薪資",
        name: "expectedSalary",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg,
          pattern: {
            value: /^\d+\/\d+$/,
            message: "期望薪資格式錯誤"
          }
        },
        placeholder: "請註記 年薪/月薪",
      },
      {
        hMsg: "個人簡歷",
        name: "aboutMe",
        component: "input",
        type: "text",
        validation: {
          required: commonRequiredMsg,
          maxLength: {
            value: 300,
            message: "不得超過300字"
          }
        },
        placeholder: "重點陳述，盡量不要超過 300字",
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
      },
      {
        hMsg: "未來想要工作地",
        name: "futureCities",
        component: "select",
        validation: {
          required: commonRequiredMsg
        },
        disabledOption: "請選擇",
        options: cityOptions,
      },
      {
        outerClass: "flex flex-wrap items-center w-full",
        containerClass: "w-full",
        btns: {
          hasAddBtn: true,
          hasDeleteBtn: true,
          hasDragBtn: true,
        },
        group: [
          {
            group: "graduateSchool",
            hMsg: "畢業學校",
            id: "id1",
            key: "name",
            name: "graduateSchool.id1.name",
            component: "input",
            type: "text",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "例如：最高學歷",
          },
          {
            group: "graduateSchool",
            hMsg: "畢業科系",
            id: "id1",
            key: "major",
            name: "graduateSchool.id1.major",
            component: "input",
            type: "text",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "例如：資訊工程學系",
          },
          {
            group: "graduateSchool",
            hMsg: "畢(肆)業時間",
            id: "id1",
            key: "leftTime",
            type: "text",
            name: "graduateSchool.id1.leftTime",
            component: "selectDate",
            validation: {
              required: commonRequiredMsg
            },
          },
        ],
      },
      {
        outerClass: "flex flex-wrap items-center w-full",
        containerClass: "", //items-center w-full
        btns: {
          hasAddBtn: true,
          hasDeleteBtn: true,
          hasDragBtn: true,
        },
      }
    ]
  },
  jobSkills: {
    title: "工作技能",
    formDataSet: [
      {
        outerClass: "",
        containerClass: "flex flex-col",
        btns: {
          hasAddBtn: true,
          hasDeleteBtn: true,
          hasDragBtn: true,
        },
        group: [
          {
            group: "jobSkills",
            id: "id1",
            key: "name",
            name: "jobSkills.id1.name",
            component: "input",
            type: "text",
            validation: {
              required: true
            },
            placeholder: "請自行敘述專業技能項目",
          },
          {
            group: "jobSkills",
            id: "id1",
            key: "items",
            secondKey: "name",
            name: "jobSkills.id1.items.id1.name",
            component: "input",
            type: "text",
            validation: {
              required: true
            },
            placeholder: "請自行敘述相關技能",
          },
        ],
      },
    ]
  },
  jobExperience: {
    title: "工作經驗",
    formDataSet: [
      {
        btns: {
          hasAddBtn: true,
          hasDeleteBtn: true,
          hasDragBtn: false,
        },
        group: [
          {
            group: "jobExperience",
            hMsg: "公司名稱",
            id: "id1",
            key: "company",
            name: "jobExperience.id1.company",
            component: "input",
            type: "text",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "請輸入公司完整名稱",
          },
          {
            group: "jobExperience",
            hMsg: "公司職稱",
            id: "id1",
            key: "occupation",
            name: "jobExperience.id1.occupation",
            component: "input",
            type: "text",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "請輸入職位名稱，例如：軟體工程師",
          },
          {
            groupTitle: "任職時間",
            btns: {
              hasAddBtn: false,
              hasDeleteBtn: false,
              hasDragBtn: false,
            },
            group: [
              {
                group: "jobExperience",
                id: "id1",
                key: "workingLength",
                item: "startYear",
                name: "jobExperience.id1.workingLength.startYear",
                component: "input",
                type: "number",
                validation: {
                  required: true
                },
                placeholder: "起始年份(西元)",
                errClass: "hidden",
                inputClass: "!w-[100px] mr-2",
                hClass: "",
                labelClass:"hidden",
                outerClass: "w-1/3 px-0 ",
                pMsg: "年"
              },
              {
                group: "jobExperience",
                id: "id1",
                key: "workingLength",
                item: "startMonth",
                name: "jobExperience.id1.workingLength.startMonth",
                component: "input",
                type: "number",
                validation: {
                  required: true
                },
                placeholder: "起始月份",
                pMsg: "月"
              },
              {
                group: "jobExperience",
                id: "id1",
                key: "workingLength",
                item: "endYear",
                name: "jobExperience.id1.workingLength.endYear",
                component: "input",
                type: "number",
                validation: {
                  required: true
                },
                placeholder: "結束年份(西元)",
                pMsg: "年",
              },
              {
                group: "jobExperience",
                id: "id1",
                key: "workingLength",
                item: "endMonth",
                name: "jobExperience.id1.workingLength.endMonth",
                component: "input",
                type: "number",
                validation: {
                  required: true
                },
                placeholder: "結束月份",
                pMsg: "月"
              },
              {
                group: "jobExperience",
                id: "id1",
                key: "workingLength",
                item: "isLeft",
                name: "jobExperience.id1.workingLength.isLeft",
                component: "input",
                type: "checkbox",
                validation: {
                  required: commonRequiredMsg
                },
                pMsg: ""
              },
            ]
          },
          {
            group: "jobExperience",
            hMsg: "工作內容",
            id: "id1",
            key: "description",
            name: "jobExperience.id1.description",
            component: "textarea",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "簡要並條列式在這家公司主要職責和成就",
          },
          {
            group: "jobExperience",
            hMsg: "工作成果",
            id: "id1",
            key: "achievement",
            name: "jobExperience.id1.achievement",
            component: "textarea",
            validation: {
              required: commonRequiredMsg
            },
            placeholder: "列在這份工作中主要作品成果",
          },
        ]
      }
    ]
  },
  portfolio: {
    title: "專業作品",
    formDataSet: [
      {
        btns: {
          hasAddBtn: true,
          hasDeleteBtn: true,
          hasDragBtn: true,
        },
        group: [
          {
            group: "portfolio",
            id: "id1",
            key: "name",
            name: "portfolio.id1.name",
            component: "input",
            type: "text",
            validation: {
              required: true
            },
            placeholder: "請自行敘述專業作品項目",
          },
          {
            btns: {
              hasAddBtn: true,
              hasDeleteBtn: false,
              hasDragBtn: false,
            },
            group: [
              {
                group: "portfolio",
                id: "id1",
                key: "items",
                secondKey: "url",
                name: "portfolio.id1.items.id1.url",
                component: "input",
                type: "text",
                validation: {
                  required: true
                },
                placeholder: "",
                hMsg: "網址"
              },
              {
                group: "portfolio",
                id: "id1",
                key: "items",
                secondKey: "description",
                name: "portfolio.id1.items.id1.description",
                component: "input",
                type: "text",
                required: false,
                placeholder: "請自行輸入作品相關敘述",
                hMsg: "作品描述"
              },
              {
                group: "portfolio",
                id: "id1",
                key: "items",
                type: "text",
                secondKey: "functions",
                name: "portfolio.id1.items.id1.functions",
                component: "input",
                required: false,
                placeholder: "請自行輸入功能相關敘述",
                hMsg: "作品功能"
              },
            ]
          },
        ],
      },
    ]
  },
  declaration: {
    title: "聲明事項",
    formDataSet: [
      {
        name: "approved",
        component: "input",
        type: "checkbox",
        validation: {
          required: commonRequiredMsg
        },
      },
      {
        hMsg: "簽名",
        name: "signature",
        component: "sign",
        validation: {
          required: commonRequiredMsg
        },
        placeholder: "電子簽名",
      },
    ]
  }
}

// components: input, select, selectDate, multiSelect

// placeholder, type, accept, hMsg, group, title, id, key, secondKey, disabledOption, options, children  為選填