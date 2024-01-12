import CalendarPage from "@/Component/Calendar/Calendar";
import Layout from "@/Component/Layoud";
import SectionHome from "@/Component/Section/SectionHome";
import SectionScroll from "@/Component/Section/SectionScroll";



export default function HomePage(){
  
  return(
    <Layout>
      <>
        <SectionHome />
        <CalendarPage/>
        <SectionScroll />
      </>
    </Layout>
  );
}

