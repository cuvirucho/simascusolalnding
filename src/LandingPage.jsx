import React, { useEffect,useState } from 'react';
import './App.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter';
import { useForm } from "react-hook-form";
import Alert from "./Alert";

const LandingPage = () => {



  
    useEffect(() => {
      AOS.init({
        duration: 1000, // Duración de la animación (ms)
        once: false,     // Ejecutar la animación solo una vez
        offset: 150,    // Distancia para activar la animación
      });
    }, []);
  
/*grupo de was*/
    const groupUrl = "https://chat.whatsapp.com/Cj9RodKhNZn1eYT69z2KrY"; 

    const gurpogasp = (e) => {
   
  
      // Redirigir al enlace del grupo
      window.open(groupUrl, "_blank");
    };
  












/*formulario*/
const [verifox, setverifox] = useState(false)
useEffect(() => {
 
  console.log(verifox);
  
  setverifox(false)
}, [])




console.log(verifox);













const botnverifasllen = ()=>{
  if (verifox) {
    handleSubmit(onSubmit) 
    setverifox(false)
  } else {
   alert("formulario incompleto")
  }
}




const { register, handleSubmit, reset } = useForm();


const API_KEY = 'AIzaSyD4R2eAYoa0AvU_FQEMzjncLC-6Tvqicxg';
const SPREADSHEET_ID = '1YNR_1P5v8nw0wYbdcptVuO_mUZPGXNCSeWybvXoOdb4';


const onSubmit = async (data) => {
  if (data.nombre && data.email && data.number ==="") {

    console.log("dssdfsdf");
  
    alert("formulario incompleto")
} else {
  
  setCargandop(true)
  
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwfcqpQLcNLGoB32ggezke75T8B7RU5xMxEpzT4ED0vuHcxRrFAdmc9QclPXEQNEb7M/exec", {
      method: 'POST',
      mode: 'no-cors',  // Evita el error de CORS
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        number: data.number,
        empresa: data.empresa,
      }),
    });
    setverifox(true)
    // Aunque 'no-cors' limita la visibilidad de la respuesta, puedes mostrar un mensaje al usuario
    const result = await response.text();
    console.log(result);
    reset();
  } catch (error) {
    console.error('Error ', error);
    setAlertMessage("Hubo un error 005");
    setShowAlert(true);
  }finally {
    setCargandop(false); // Ocultar la pantalla de carga
    gurpogasp()
    setverifox(false)
  }
}

};





/*alerta DE ENEVISD CON EXITO */
const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState("");




/*CATGDSAO*/
const [cargandop, setCargandop] = useState(false)
const cargand = ()=>{
setCargandop(!cargandop)
}


  return (
    
    <div className="landing-page">
<div className="gololoog"  >

  <img  className="clientitem2" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734415183/sicmas_2500_x_931_px_vxwyxm.png" alt="" />
</div>



{/* regisdtro enivadp*/ }

     
     
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Conviértete en un experto en ISO 9001:2015</h1>
          <p>Aumenta la calidad de tu empresa con nuestra certificación avalada por expertos</p>
          <button 
          onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
          className="cta-button">Regístrate Ahora</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
      <h2>¿Por qué elegir nuestro curso?</h2>
      <ul className="benefits-list">
        <div className="conteitepro" data-aos="fade-up">
          <i className="bx bxs-factory"></i>
          <li>Mejora tus procesos internos</li>
        </div>
        <div className="conteitepro" data-aos="fade-up">
          <i className="bx bxs-traffic-barrier"></i>
          <li>Reduce riesgos en auditorías</li>
        </div>
        <div className="conteitepr2" data-aos="fade-up">
        <i class='bx bx-line-chart'></i>
          <li>Mora tu productividad</li>
        </div>
     
        <div className="conteitepr2" data-aos="fade-up">
        <i class='bx bxs-user-check'></i>
          <li>Preparate para el futuro con la ISO 9001 2025 </li>
        </div>

        <div className="conteitepr2" data-aos="fade-up">
          <i className="bx bxs-edit"></i>
          <li>Acceso a plantillas exclusivas y recursos descargables</li>
        </div>
     
    
     
      </ul>
    </section>




      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Empresas que ya confiaron en nosotros</h2>

           <div className='contcientes' >
<img className='clientitem' src="https://cdn.worldvectorlogo.com/logos/continental-54.svg" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404464/6_mliege.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404462/7_xmc9vc.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404462/5_opjkgk.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404461/2_dx1rrv.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404461/1_j3kz8m.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404461/3_zcz6wk.png" alt="" />
<img className='clientitem' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1734404461/4_zuvx0m.png" alt="" />


           </div>
  

        <div className="testimonial" data-aos="fade-up">
          <p>"Gracias a este curso, las empresas logran superar las auditorías con éxito."</p>
          <span>- Transformación organizacional</span>
        </div>
      </section>
















      {/* Course Details Section */}
      <section className="details">
        <h2>Todo lo que necesitas saber para certificarte</h2>
        <p data-aos="fade-left" >Duración: 40  horas academicas</p>
        <p data-aos="fade-right"  >Modalidad: Online + asesoría personalizada</p>
        <p data-aos="fade-left" >Incluye simulación de auditorías reales</p>
        <button 
        onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
        data-aos="fade-up"  className="cta-button2">Reserva tu lugar ahora</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>¿Quiénes somos?</h2>
        
        <div className="text-container">
           <Typewriter
            words={[
              'En SICMAS Consultores Estratégicos brindamos formación especializada en sistemas de gestión, seguridad laboral, medio ambiente, y transformación digital. Preparamos a profesionales para obtener certificaciones clave y liderar con excelencia en su sector. ¡Certifícate con expertos!',
              'No esperes más para alcanzar tu éxito.',
            
            ]}
            loop={0} // 0 para repetir indefinidamente
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </div>
      </section>

 




{/* Registration Form Section */}



{
  cargandop?
  
  <p>Cargansdop</p>
  :     
      <section className="registration-form" id="registration"  >
        <h2>Inscríbete ahora</h2>
        <form  onSubmit={handleSubmit(onSubmit)}  >
          <input type="text" placeholder="Nombre completo" {...register("nombre", { required: true })}   />
          <input type="email" placeholder="Correo electrónico" {...register("email", { required: true })} />
          <input type="number" placeholder="Teléfono"  {...register("number", { required: true })} />
          <input   type="text" placeholder="Empresa (opcional)" {...register("empresa", { required: false })} />
          <button  type="submit" className="cta-button3"  >¡Enviar inscripicion!</button>
        </form  >
      </section>
}
 













      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Sicmas consultin grup | Todos los derechos reservados</p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=61562442796480">Facebook</a>
          <a href="https://www.linkedin.com/in/sicmas-consulting-group-gestor-ambiental-1771ba2b0/">LinkedIn</a>
          
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
