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
                <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/408880965_771117428161716_426131079936299727_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHOkzagGsLllvQq7VYel-QQOC1KWl2SdMM4LUpaXZJ0w12HlgRU3rd2ViMnWA9uMw0wtexFtr6Xc1y8Pahgo33a&_nc_ohc=jFm-NlW5G5sAX8eG0IK&_nc_ht=scontent.fres2-1.fna&oh=00_AfCpJTZ0KUh95fhNJQCYvOKx_jHbweWbsYE6zVi3VA9HCw&oe=65BF527E' ></img>
            </div>
        </div>
    </div>
  )
}

export default Mision