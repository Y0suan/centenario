import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export const NuestraHistoria = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activar una vez
    threshold: 0.5, // Cuando el 50% del elemento está visible
  });

  return (
    <div className='NuestraHistoria'>
      <div className='ContImgText' ref={ref}>
        <div>
          <h2>Nuestra Historia</h2>
          <p>
            La Asociación Civil "El Centenario" tiene sus raíces en el
            compromiso y la visión de un grupo de personas que se unieron con
            un propósito común el 29 de julio de 2006. Surgió de la necesidad
            de darle una entidad civil al trabajo que ya se venía realizando en
            diversos ámbitos de la comunidad. Desde su inicio, nos hemos
            dedicado a mejorar la calidad de vida de nuestros vecinos y a
            abogar por la inclusión de los sectores más postergados de la
            sociedad.
          </p>
        </div>
        <img
          src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707990509/399902618_755396736400452_3876708960196930481_n_yvhd3r.jpg'
          className='imgScale'
        />
      </div>
        <div className='ContImgText' >
            <img className='imgScale' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707990509/391620013_744849604121832_2600211533853916193_n_ts5crp.jpg' ></img>
            <div>
                <p>Nos comprometimos con diferentes áreas: Social, Educativo, Económico, Político, Ambiental, Urbano e Histórico, Deportivo, y de Ciudadanía. Cada una de estas áreas refleja nuestra firme voluntad de contribuir al desarrollo integral de nuestra comunidad y de promover un cambio positivo en la sociedad.</p>
            </div>
        </div>
        <div className='ContImgText' >
            <div>
                <p>El nombre "El Centenario" surgió como una meta, la de alcanzar el centenario de nuestra ciudad de Eldorado. Cuando comenzamos nuestra labor, nuestra localidad tenía 87 años, y hoy, después de 17 años de trabajo arduo, celebramos haber alcanzado los 102 años de Eldorado.</p>
            </div>
            <img className='imgScale' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707990508/391628208_744957680777691_5618091730201606672_n_tw7p1n.jpg' ></img>
        </div>
        <div className='ContImgText' >
            <img className='imgScale' src='https://res.cloudinary.com/dzqdjsrez/image/upload/v1707990508/396701932_749243127015813_1800951299130026170_n_t6wkad.jpg' ></img>
            <div>
                <p>Nos comprometimos con diferentes áreas: Social, Educativo, Económico, Político, Ambiental, Urbano e Histórico, Deportivo, y de Ciudadanía. Cada una de estas áreas refleja nuestra firme voluntad de contribuir al desarrollo integral de nuestra comunidad y de promover un cambio positivo en la sociedad.</p>
            </div>
        </div>
    </div>
  )
}
