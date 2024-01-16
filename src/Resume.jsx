import { FormProvider } from "./common/features/FormContext";
import Declaration from "./modules/Declaration";
import JobExperience from "./modules/JobExperience";
import JobSkills from "./modules/JobSkills";
import PersonalInfo from "./modules/PersonalInfo";
import Portfolio from "./modules/Portfolio";

const Resume = () => {

  return (
    <FormProvider>
      <PersonalInfo />
      <JobExperience />
      <JobSkills />
      <Portfolio />
      <Declaration />
    </FormProvider>
  )
}

export default Resume;
