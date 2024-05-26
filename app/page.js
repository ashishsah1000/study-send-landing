import Academics from "@/components/Home/Academics";
import ComingSoon from "@/components/Home/ComingSoon";
import CtaSec from "@/components/Home/CtaSec";
import EventSec from "@/components/Home/EventSec";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Layout/Navbar";
import ResumeMakerSec from "@/components/Home/ResumeMakerSec";
import SkillSec from "@/components/Home/SkillSec";
import SideNav from "@/components/Home/SideNav";
import FullScreenVideoBackground from "@/components/video/FullScreenVideoBackground";

export default function Home() {
  return (
    <main>
      {/* <Hero/> */}
      <FullScreenVideoBackground />
      <br></br>
      <br></br>
      <ResumeMakerSec />

      <Academics />
      {/* <SkillSec /> */}
      {/* <EventSec /> */}
      {/* <CtaSec /> */}
      <ComingSoon />
      {/* <Footer /> */}
    </main>
  );
}
