import { DeclarationResume } from "../../modules/Declaration";
import { JobExperienceResume } from "../../modules/JobExperience";
import { JobSkillsResume } from "../../modules/JobSkills";
import { PersonalInfoResume } from "../../modules/PersonalInfo";
import { PortfolioResume } from "../../modules/Portfolio";
import { useContext } from "react";
import { FormContext } from "../features/FormContext";
import ReactDOM from 'react-dom/client'
import html2pdf from 'html2pdf.js';
import logo from "../../../public/images/logo.png";
import banner from "../../../public/images/Banner.png";

const ResumePDF = () => {
  const data = useContext(FormContext);
  const renderForm = RenderForm(data);


  const saveImage = async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    await ReactDOM.createRoot(element).render(renderForm);

    const opt = {
      margin:       [0, 0, 10, 0],
      filename:     'resume.pdf',
      pagebreak:    {mode: ['css', 'legacy', 'avoid-all']},
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {

      const totalPages = pdf.internal.getNumberOfPages();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
    
      const logoWidth = 36;
      const logoHeight = 20;
    
      const offsetX = 0;
      const offsetY = -2;
    
      const xPosition = pageWidth - logoWidth - offsetX;
      const yPosition = pageHeight - logoHeight - offsetY;
    
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.addImage(logo, "PNG", xPosition, yPosition, logoWidth, logoHeight);
      }
      document.body.removeChild(element);
    }).save();
        
  };

  return (
    <button
      type="button"
      onClick={saveImage}
      className="btn saveBtn block !w-fit"
    >
      下載履歷(PDF)
    </button>
  )
}

export default ResumePDF;

function RenderForm(data) {

  return (
    <div>
      <header>
        <img src={banner} alt="banner" />
      </header>
      <div className="px-[40px] py-[30px] flex flex-col">
        <PersonalInfoResume data={data.personalInfo} />
        <JobSkillsResume data={data.jobSkills} />
        <JobExperienceResume data={data.jobExperience} />
        <PortfolioResume data={data.portfolio} />
        <DeclarationResume data={data.declaration} />
      </div>
    </div>
  )
}