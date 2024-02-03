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

const A4_WIDTH = 595.28; // A4 纸的宽度, 单位：pt
const A4_HEIGHT = 841.89; // A4 纸的高度, 单位：pt

const SnapShot = () => {
  const data = useContext(FormContext);
  const renderForm = RenderForm(data);

  const saveImage = async () => {
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
  
    await ReactDOM.createRoot(tempDiv).render(renderForm);
  
    const canvas = await html2canvas(tempDiv, { useCORS: true, scale: 2 });
    document.body.removeChild(tempDiv);
  
    const pdf = new jsPDF('p', 'pt', 'a4');
  
    // 根据内容宽度相对于A4宽度的比例来放大canvas
    const scale = A4_WIDTH / canvas.width;
    const scaledWidth = canvas.width * scale *2;
    const scaledHeight = canvas.height * scale *2;
  
    // 计算放大后内容应该在PDF页面上的起始X坐标，以实现水平居中
    const startX = 0;
    let startY = 0;
  
    // 将整个放大后的canvas内容添加到PDF中，确保左右不被截取
    if (scaledHeight <= A4_HEIGHT) {
      // 如果放大后的内容高度小于或等于A4页面高度，直接添加到PDF
      pdf.addImage(canvas, 'JPEG', startX, startY, scaledWidth, scaledHeight);
    } else {
      // 如果内容高度超过A4页面，需要分页
      let remainingHeight = scaledHeight;
      while (remainingHeight > 0) {
        const pageHeight = Math.min(remainingHeight, A4_HEIGHT);
        pdf.addImage(canvas, 'JPEG', startX, startY, scaledWidth, scaledHeight, '', 'NONE', 0, -startY);
        remainingHeight -= A4_HEIGHT;
        startY -= A4_HEIGHT;
        if (remainingHeight > 0) {
          pdf.addPage();
        }
      }
    }
  
    pdf.save('resume.pdf');
  };
  
  

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
    <div className='w-1/2'>
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