
import AuditoriasVIew from "@/Component/AuditoriasVIew";
import { ContEventSemana } from "@/Component/ContEventSemana";
import Filtros from "@/Component/Filtros";
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
    </div>
  );
}

