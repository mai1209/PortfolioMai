import style from "../styles/Work.module.css"

function Work() {
  return (
    <div className={style.container}>
      <div className={style.firstContainer}>
        <div className={style.containerText}>
          <p className={style.fistText}>FULLSTACK</p>
          <p   className={style.secondText}>MULTI-PLATFORM</p>
          <p  className={style.thirtText} >DEVELOPER</p>
        </div>
        <p>SKILLS</p>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <p>Defining Traits</p>
        <div>
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
      <div>
        <p>SOME CLIENTS</p>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Growth expense manager app</p>
              <p>
                A personal project developed with React, focused on finance
                management, organization, and a note-taking system. It combines
                key features like budget tracking, task management and a digital
                notebook, offering a complete solution for personal productivity
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Vichos Barber App</p>
              <p>
                A dynamic and simple app for a local barbershop. The client
                needed a solution to his mess, so I proposed an app with barber
                and client management and rating, along with personalized VIP
                memberships.
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Newt Book App</p>
              <p>
                Contributed to improving visual presentation and readability,
                enhancing the overall user experience and ensuring high-quality
                content display. Assisted in managing website content for a
                publishing project by uploading files, editing book covers, and
                refining text layouts.
              </p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p>Wifrut.com e-commerce for vegetables and fruits</p>
              <p>A modern and intuitive interface was designed and implemented for a major company in southern Argentina, optimizing navigation and user interaction. A secure and efficient backend was created to manage products, orders, and users, ensuring seamless transaction management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
