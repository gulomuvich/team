import AboutCourse from "../../components/AboutCourse/AboutCourse";
import CourseCurator from "../../components/CourseCurator/CourseCurator";
import CourseDiscountSec from "../../components/CourseDiscount/CourseDiscount";
import CourseHero from "../../components/CourseHero/CourseHero";
import CourseProgram from "../../components/CourseProgram/CourseProgram";
import CourseTestimonial from "../../components/CourseTestimonial/CourseTestimonial";
import ForWhom from "../../components/forWhom/ForWhom";
import MainStepsSec from "../../components/MainSteps/MainStepsSec";
import "./Courses.css";
function Courses() {
  return <main>
    <CourseHero/>
    <AboutCourse/>
    <CourseCurator/>
    <MainStepsSec/>
    <CourseDiscountSec/>
    <ForWhom/>
    <CourseProgram/>
    <CourseTestimonial/>
  </main>;
}
export default Courses;
