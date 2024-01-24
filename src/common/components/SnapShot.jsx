import ReactDOM from 'react-dom/client'
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import { useContext } from 'react';
import { FormContext } from '../features/FormContext';
import { PersonalInfoResume } from '../../modules/PersonalInfo';
import { JobSkillsResume } from '../../modules/JobSkills';
import { PortfolioResume } from '../../modules/Portfolio';
import { JobExperienceResume } from '../../modules/JobExperience';
import { DeclarationResume } from '../../modules/Declaration';
import banner from "../../../public/images/Banner.png";

const A4_WIDTH = 592.28;
const A4_HEIGHT = 841.89;

const SnapShot = () => {

  const data = useContext(FormContext);
  const renderForm = RenderForm(data);

    const saveImage = async() => {
      const tempDiv = document.createElement("div");
      
      document.body.appendChild(tempDiv);

      await ReactDOM.createRoot(tempDiv).render(renderForm);
      await html2canvas(tempDiv, { useCORS: true })
      .then((canvas) => {
          const contentWidth = canvas.width;
          const contentHeight = canvas.height;

          const imgWidth = A4_WIDTH;
          const imgHeight = A4_WIDTH/contentWidth * contentHeight;
          const pageData = canvas.toDataURL('image/jpeg', 1.0);
  
          const pdf = new jsPDF('', 'pt', 'a4');
  
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
          pdf.save("resume.pdf")
          document.body.removeChild(tempDiv);
        })
    }

    return (
      <>
        <div className="fixed w-full z-10 top-0 py-2 bg-white border-b border-blue-500">
          <div className="container md:w-2/3 lg:w-1/2">
            <button type="button" onClick={saveImage} className="btn saveBtn !w-fit block ml-auto">下載履歷(PDF)</button>
          </div>
        </div>
        {/* {renderForm} */}
      </>
    )
}

export default SnapShot;


function RenderForm(data) {

  return (
    <>
      <header>
        <img src={banner} alt="banner" />
      </header>
      <div className="px-[50px] py-[20px] flex flex-col gap-4">
        <PersonalInfoResume data={data.personalInfo} />
        <JobSkillsResume data={data.jobSkills} />
        <JobExperienceResume data={data.jobExperience} />
        <PortfolioResume data={data.portfolio} />
        <DeclarationResume data={data.declaration} />
      </div>
    </>
  )
}