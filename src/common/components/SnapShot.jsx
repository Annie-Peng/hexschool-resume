import ReactDOM from 'react-dom/client'
import { useContext } from 'react';
import { FormContext } from '../features/FormContext';
import { PersonalInfoResume } from '../../modules/PersonalInfo';
import { JobSkillsResume } from '../../modules/JobSkills';
import { PortfolioResume } from '../../modules/Portfolio';
import { JobExperienceResume } from '../../modules/JobExperience';
import { DeclarationResume } from '../../modules/Declaration';
import banner from "../../../public/images/Banner.png";
import logo from "../../../public/images/logo.png";
import html2pdf from 'html2pdf.js';


const SnapShot = () => {
  const data = useContext(FormContext);
  const renderForm = RenderForm(data);


  const saveImage = async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    await ReactDOM.createRoot(element).render(renderForm);

    const opt = {
      margin:       [0, 0, 12, 0],
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
      const offsetY = 0;
    
      const xPosition = pageWidth - logoWidth - offsetX;
      const yPosition = pageHeight - logoHeight - offsetY;
    
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.addImage(logo, "PNG", xPosition, yPosition, logoWidth, logoHeight);
      }
      
    }).save();
        
  };
  
  

    return (
      <>
        <div className="fixed w-full z-10 top-0 py-2 bg-white border-b border-blue-500">
          <div className="container md:w-2/3 lg:w-1/2">
            <button type="button" onClick={saveImage} className="btn saveBtn !w-fit block ml-auto">下載履歷(PDF)</button>
          </div>
        </div>
      </>
    )
}

export default SnapShot;


function RenderForm(data) {

  return (
    <div>
      <header>
        <img src={banner} alt="banner" />
      </header>
      <div className="px-[40px] py-[30px] flex flex-col gap-20">
        <PersonalInfoResume data={data.personalInfo} />
        <JobSkillsResume data={data.jobSkills} />
        <JobExperienceResume data={data.jobExperience} />
        <PortfolioResume data={data.portfolio} />
        <DeclarationResume data={data.declaration} />
      </div>
    </div>
  )
}