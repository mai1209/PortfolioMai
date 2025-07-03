import style from "../styles/Work.module.css";
//import Waves from './Waves';

//import { HiArrowTurnRightUp } from "react-icons/hi2";
import Contact from './Contact';


function Work() {
  const listItems = Array.from({ length: 37 }, (_, i) => <li key={i}></li>);
  return (
    <div>
      <div className={style.container}>

        {/* Fondo
        <div className={style.letterGlitchBackground}>
          <Waves
            lineColor="#e44528"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div> */}
    <ul className={style.background}>
        {listItems}
      </ul>
        {/* Contenido arriba */}
        <div className={style.blur}>
          <div className={style.cajauno}>
            <div className={style.firstContainer}>
              <div className={style.containerText}>
                <p className={style.firstText}>FULLSTACK</p>
                <p className={style.secondText}>MULTI-PLATFORM</p>
                <p className={style.thirdText}>DEVELOPER</p>
              </div>
              <p className={style.skill}>SKILLS</p>
              <div className={style.skillsImg}>
                <img src={`${process.env.PUBLIC_URL}/React.png`} alt="react" />
                <img src={`${process.env.PUBLIC_URL}/js.png`} alt="js" />
                <img src={`${process.env.PUBLIC_URL}/Html 5.png`} alt="html5" />
                <img src={`${process.env.PUBLIC_URL}/css.png`} alt="css" />
                <img src={`${process.env.PUBLIC_URL}/sass.png`} alt="sass" />
                <img src={`${process.env.PUBLIC_URL}/NPM.png`} alt="npm" />
                <img src={`${process.env.PUBLIC_URL}/Nodejs.png`} alt="node" />
                <img src={`${process.env.PUBLIC_URL}/Mongo.png`} alt="mongo" />
                

              </div>
            </div>

            <div className={style.containerPersonal}>
              <img className={style.imgMai} src={`${process.env.PUBLIC_URL}/mai.png`} alt="mai" />
              <p className={style.title}>Defining Traits</p>
              <div className={style.containerSkills}>
                <p>Vocational</p>
                <p>Entrepreneur</p>
                <p>Respectful</p>
                <p>Creative</p>
                <p>Communicative</p>
                <p>Curious</p>
                <p>Self-contained</p>
                <p>Diligent</p>
                <p>Leader</p>
              </div>
            </div>
          </div>

          <div className={style.Work}>
            <p className={style.titleclient}>SOME CLIENTS</p>
            <div className={style.containerAll}>
              <div className={style.info}>
                <img src={`${process.env.PUBLIC_URL}/work1.png`} alt="work1" />
                <div className={style.infoText}>
                  <p className={style.infoTitleP}>Growth expense manager app</p>
                  <p className={style.description}>
                    A personal project developed with React, focused on finance
                    management, organization, and a note-taking system. It combines
                    key features like budget tracking, task management and a digital
                    notebook, offering a complete solution for personal productivity
                  </p>
                </div>
              </div>
              <div className={style.info}>
                <img src={`${process.env.PUBLIC_URL}/work2.png`} alt="work2" />
                <div className={style.infoText2}>
                  <p className={style.infoTitleP}>Vichos Barber App</p>
                  <p className={style.description}>
                    A dynamic and simple app for a local barbershop. The client
                    needed a solution to his mess, so I proposed an app with barber
                    and client management and rating, along with personalized VIP
                    memberships.
                  </p>
                </div>
              </div>
              <div className={style.info}>
                <img src={`${process.env.PUBLIC_URL}/work3.png`} alt="work3" />
                <div className={style.infoText3}>
                  <p className={style.infoTitleP}>Newt Book App</p>
                  <p className={style.description}>
                    Contributed to improving visual presentation and readability,
                    enhancing the overall user experience and ensuring high-quality
                    content display. Assisted in managing website content for a
                    publishing project by uploading files, editing book covers, and
                    refining text layouts.
                  </p>
                </div>
              </div>
              <div className={style.info}>
                <img src={`${process.env.PUBLIC_URL}/work4.png`} alt="work4" />
                <div className={style.infoText4}>
                  <p className={style.infoTitleP}>Wifrut.com e-commerce for vegetables and fruits</p>
                  <p className={style.description}>
                    A modern and intuitive interface was designed and implemented for a major company in southern Argentina, optimizing navigation and user interaction. A secure and efficient backend was created to manage products, orders, and users, ensuring seamless transaction management.
                  </p>
                </div>
              </div>
            </div>

            <div className={style.ask} >
              <p>Ask</p>
              <p>for</p>
              <p>more</p>
            </div>

          </div>

        </div>

      </div>
      <Contact />
    </div>
  );
}

export default Work;
