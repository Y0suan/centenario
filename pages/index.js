
import AuditoriasVIew from "@/Component/AuditoriasVIew";
import Filtros from "@/Component/Filtros";
import Header from "@/Component/Header";


import Footer from "@/Component/footer";





export default function HomePage(){
  return(
    <div>
      <Header/>
      {/* <AuditoriasVIew></AuditoriasVIew> */}
      <div  className="body">
        <Filtros></Filtros>

      </div>
      <Footer/>
    </div>
  );
}

