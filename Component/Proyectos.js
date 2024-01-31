import React from 'react'
import Link from 'next/link'


export const Proyectos = () => {
  return (
    <div className='Proyectos' >
        <div className='ProyectosCont' >
            <div className='ProyectosImg' >
                <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/412337800_779011657372293_8277884973735344298_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF2i5Fi4xJ16z5OREelD8qKcnGvdKGoYLByca90oahgsFfr1Twctxv8CC_UkQF4V1c09_H_A4f6ekCClrv18p2L&_nc_ohc=qnbA5_8071EAX9qEdhW&_nc_ht=scontent.fres2-1.fna&oh=00_AfBaeEKMsPHg95Jw1-TRZoxubLHXfVjGhf1-7XDa-0_pdg&oe=65BE604A' ></img>
                <div className='ProyectosImgDiv' >
                    <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/406508267_770304684909657_4876971367731730750_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHsacrHxatyYVeO3sDShEbA15cL-4w1v-_Xlwv7jDW_704fhqtVSVBDAU6tBeSYGmi-eKqJQnifeV9-dtDWVcw5&_nc_ohc=1eVeHqs32tMAX-Bpubv&_nc_ht=scontent.fres2-1.fna&oh=00_AfARClshi8rg-EmqA3T3xXfENsuEHla1G9zIFD6nxtRUeg&oe=65BFBE52'></img>
                    <img src='https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/409173432_774268941179898_4704317937298655953_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHpXf_5Z6JSn9VIZGBeAnXCIOHkS0dU76og4eRLR1TvqvixEACw9MbWB6JXuohTodpuaTh3SiL-zNpNEXf7RIA6&_nc_ohc=771AcRTci2cAX_XKNW3&_nc_ht=scontent.fres2-1.fna&oh=00_AfArkvONJe0k2q4AgCFKJWB1bnEjegrbaVJdh03sioES7Q&oe=65BF8DB0' ></img>
                </div>
            </div>
            <div className='ProyectosText' >
                <Link href={'/cursos'} className='color' >Educación para el Desarrollo</Link>
                <h3>Cursos en "El Centenario</h3>
                <p>Descubre en "El Centenario" una variedad de cursos diseñados para empoderar y enriquecer. Desde formación académica hasta habilidades prácticas, nuestro objetivo es brindar oportunidades educativas que impulsen el crecimiento personal y profesional, contribuyendo así al desarrollo integral de nuestra comunidad en Eldorado, Misiones. Únete a nuestros cursos y prepárate para un futuro lleno de posibilidades</p>
                <Link href={'/cursos'} className='btn btnPrimary' >
                    Descubre Nuestros Cursos
                </Link>
            </div>
        </div>
    </div>
  )
}
