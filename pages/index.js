

import { ContEventSemana } from "@/Component/ContEventSemana";
import EspacioPublicitario from "@/Component/EspacioPublicitario";
import Footer from "@/Component/Footer";

import Header from "@/Component/Header";
import LayerPrincipal from "@/Component/LayerPrincipal";
import Nav from "@/Component/Nav";
import NuevoHome from "@/Component/NuevoHome";
import SectionHome from "@/Component/Section/SectionHome";
import SectionScroll from "@/Component/Section/SectionScroll";


export default function HomePage(){
  
  return(
    <div class="body">
      <Header></Header>
      <Nav></Nav>
      {/* <LayerPrincipal/>
      <ContEventSemana/>
      <Footer/> */}
      
      <SectionHome/>
      <SectionScroll/>
      <EspacioPublicitario/>

    </div>
  );
}

