//Header
import Header from "./Header";
//CurriculumVitae
import CurriculumVitae from ".//CurriculumVitae";
//Profile Information
import ProfileInformation from './ProfileInformation';

//this component displays other components
function Display(){  
    return(
      <div>
      <Header/>
      <ProfileInformation/>
      <CurriculumVitae/>
      </div>
    )
  }

  export default Display;
