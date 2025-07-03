import style from '../styles/Contact.module.css'
import Swal from 'sweetalert2';
import { useState } from "react";
function Contact() {
      const [isLoading, setIsLoading] = useState(false);
 async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        Swal.fire({
          position: 'center',
          width: '400px',
          background: '#e44528',
          color: '#ffffff',
          title: '¡Enviado!',
          text: 'Tu mensaje fue enviado con éxito. Te responderé a la brevedad.',
          icon: 'success',
          iconColor: '#000000',
          confirmButtonText: 'Genial',
          confirmButtonColor: '#000000',
          customClass: {
            confirmButton: style.mySwalButton,
            title: style.mySwalTitle,
          },
          showConfirmButton: true,
          backdrop: true,
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error de Conexión',
        text: 'No pudimos conectarnos para enviar tu mensaje. Revisa tu conexión a internet.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    } finally {
      setIsLoading(false);
    }
  }

    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.uno}>
                    <div className={style.fistContainer}>
                        <div className={style.containerStart}>
                            <p className={style.title}> Know little about me</p>

                        </div>
                        <p className={style.personalInfo}>I'm Maira Coria, a full-stack developer from Santa Fe (Capital), Argentina. At 28 years old, I'm ready to take the next step in my career as a web developer. I'm passionate about learning and taking on new challenges, and I pride myself on my responsibility and dedication. I seek opportunities to apply my full-stack skills to innovative projects that make a difference. I also have an intermediate level of English, which allows me to collaborate effectively in diverse and multicultural environments. <br /><br />
                        I'm currently running a small tech startup with my partner, a CEO, and a team of designers, editors, and marketing professionals.</p>
                    </div>
                </div>
                <div className={style.cajaStart}>
                    <img className={style.star}  src={`${process.env.PUBLIC_URL}/star2.png`}   alt="start" />
                    <p className={style.starText}>THANKS FOR <br /> VISIT ME, HOPE WE CAN<br /> WORK TOGETHER!</p>
                </div>
            </div>
            <div className={style.dos}>
                <form id="contacto" action="https://formsubmit.co/maidev1209@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <p className={style.textContact}>CONTACT</p>
                    <div className={style.inputContainer}>
                        <input type="text" name="name" placeholder='name Codex Astra Hub' />
                        <input type="text" name="email" placeholder='email codexastra.hub@gmail.com' />
                        <input type="text" name="subjet" placeholder='subjet Developer’s portfolio' />
                        <textarea
                         name="message"
                            rows="4"
                            cols="50"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button className={style.btn}  type="submit" disabled={isLoading} > {isLoading ? 'Enviando...' : 'send request'}</button>
                </form>
                <div className={style.SM}>
                    <p>Social media</p>

                </div>
            </div>
        </div>
    )
}

export default Contact