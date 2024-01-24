export const personalInfoTestData =  {
  profile: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  applicantName: "applicantName",
  phone: "0912345678",
  email: "1@gmail.com",
  occupation: "occupation",
  workingLength: "6年",
  expectedSalary: "40000/800000",
  aboutMe: "Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:bg-contain to only apply the bg-contain utility on hover.Tailwind ",
  currentCity: "臺北市",
  futureCities: "基隆市",
  graduateSchool: {
    id1: {
      name: "name",
      major: "major",
      leftTime: "leftTime"
    },
  }
}

export const jobExperienceTestDataSet =  {
  jobExperience: {
    id1: {
      company: "六角學院",
      occupation: "軟體工程師",
      workingLength: {
        startYear: "2019",
        startMonth: "2",
        endYear: "2023",
        endMonth: "11",
        isLeft: true
      },
      description: "負責執行前端設計工作。\n負責透過蒐集資料了解該公司屬性與產業別，規畫設計出適合的 mockup 畫面 與客戶溝通事宜，並且適時給予專業建議，以利專案後續進行，根據客戶需求來進行頁面的切版與程式撰寫。",
      achievement: "CSS優化管理:我積極推動公司的CSS管理， 逐步轉換為SCSS，以提高代碼的可讀性和 可維護性。/n同時，我成功將CSS進行壓縮， 有效減少了網頁讀取時間，使用戶能夠更 快速 地獲取所需資訊，整體讀取時間減少 了10%。"
    },
  }
}

export const jobSkillTestDataSet =  {
  jobSkills: {
    id1: {
      name: "前端框架",
      items: {
        id1: {
          name: "使用Vue Cli /Vite 建立專案"
        },
        id2: {
          name: "擁有Vue2、Vue3 開發經驗"
        }
      }
    },
  }
}

export const portFolioTestDataSet =  {
  portfolio: {
    id1: {
      name: "Github",
      items: {
        id1: {
          url: "https://www.google.com.tw",
					description: "這是作品描述",
					functions: "這是功能描述"
        },
        id2: {
          url: "https://www.google.com.tw",
					description: "這是作品描述",
					functions: "這是功能描述"
        },
      }
    },
    id2: {
      name: "Github",
      items: {
        id2: {
          url: "https://www.google.com.tw",
					description: "這是作品描述",
					functions: "這是功能描述"
        },
      }
    },
  }
}

export const declarationTestDataSet =  {
  signature: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  signatureBuiltTime: "2024/1/18", // 年/月/日 (new Date()) 時區
  signatureUpdatedTime: "2024/1/18",
  approved: true
}