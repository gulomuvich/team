import AboutHero from "../../components/AboutHero/AboutHero";
import AboutTestimonials from "../../components/AboutTestimonials/AboutTestimonials";
import BestJobs from "../../components/BestJobs/BestJobs";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import EventBottom from "../../components/eventBottom/EventBottom";
import MeetTeam from "../../components/meetTeam/MeetTeam";
import MainDirections from "../../components/ourMainDirections/MainDirections";
import StandAlways from "../../components/standAlwaysAbout/StandAlways";
import StudyProcces from "../../components/studyProcces/StudyProcces";

function AboutUs() {
  return (
    <main>
      <AboutHero />
      <StandAlways />
      <MainDirections />
      <StudyProcces/>
      <MeetTeam/>
      <AboutTestimonials/>
      <BestJobs/>
      <LatestPosts/>
      <EventBottom/>
    </main>
  );
}

export default AboutUs;