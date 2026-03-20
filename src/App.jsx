import VastuTopSlider from "./components/VastuTopSlider";
import VastuHero from "./components/VastuHero";
import VastuTestimonials from "./components/VastuTestimonials";
import VastuIndustries from "./components/VastuIndustries";
import VastuFamiliarCheck from "./components/VastuFamiliarCheck";
import VastuReframe from "./components/VastuReframe";
import VastuMasterclassIntro from "./components/VastuMasterclassIntro";
import VastuModules from "./components/VastuModules";
import VastuBonusSection from "./components/VastuBonusSection";
import VastuFitSection from "./components/VastuFitSection";
import VastuMentorSection from "./components/VastuMentorSection";
import VastuRealQuestion from "./components/VastuRealQuestion";
import VastuValueStack from "./components/VastuValueStack";
import VastuFaq from "./components/VastuFaq";
import VastuStickyBar from "./components/VastuStickyBar";
import { usePopup } from "./context/PopupContext"
import VastuPopup from "./components/VastuPopup";
function App() {
  const { isOpen, closePopup } = usePopup()
  return (
    <div>
      <VastuTopSlider/>
      <VastuHero />
      <VastuTestimonials />
      <VastuIndustries />
      <VastuFamiliarCheck />
      <VastuReframe />
      <VastuMasterclassIntro/>
      <VastuModules/>
      <VastuBonusSection/>
      <VastuFitSection/>
      <VastuMentorSection/>
      <VastuRealQuestion/>
      <VastuValueStack/>
      <VastuFaq/>
      <VastuStickyBar/>

<VastuPopup
isOpen={isOpen}
closePopup={closePopup}
/>


    </div>

    
  );
}

export default App;