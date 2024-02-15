import Link from 'next/link'
import React from 'react'

const Mision = () => {
  return (
    <div className='Mision' >
        <div className='MisionCont'>
            <div className='MisionText' >
                <Link href={'/'} className='color' >Nosotros</Link>
                <h3>Nuestra Mision</h3>
                <p>"En "El Centenario", nos dedicamos a forjar un Eldorado mejor. Impulsamos el cambio social, fomentamos la educación, respaldamos emprendimientos económicos, promovemos la participación ciudadana y protegemos nuestro entorno. Trabajamos incansablemente para alcanzar metas específicas y cultivar valores de solidaridad y respeto. Únete a nosotros en la construcción de un futuro más brillante para nuestra comunidad."</p>
            </div>
            <div className='MisionImg' >
                <img src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707823359/408880965_771117428161716_426131079936299727_n_ktsnpn.jpg' ></img>
            </div>
        </div>
    </div>
  )
}

export default Mision