

import { ContEventSemana } from "@/Component/ContEventSemana";
import Footer from "@/Component/Footer";

import Header from "@/Component/Header";
import LayerPrincipal from "@/Component/LayerPrincipal";
import Nav from "@/Component/Nav";


export default function HomePage(){
  
  return(
    <div class="body">
      <Header></Header>
      <Nav></Nav>
      <LayerPrincipal/>
      <ContEventSemana/>
      <Footer/>

    </div>
  );
}

