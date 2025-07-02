import style from '../styles/Contact.module.css'

function Contact() {

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
                    <img className={style.star} src="/star2.png" alt="start" />
                    <p className={style.starText}>THANKS FOR <br /> VISIT ME, HOPE WE CAN<br /> WORK TOGETHER!</p>
                </div>
            </div>
            <div className={style.dos}>
                <form action="">
                    <p className={style.textContact}>CONTACT</p>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder='name Codex Astra Hub' />
                        <input type="text" placeholder='email codexastra.hub@gmail.com' />
                        <input type="text" placeholder='subjet Developer’s portfolio' />
                        <textarea
                            rows="4"
                            cols="50"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button className={style.btn}>send request</button>
                </form>
                <div className={style.SM}>
                    <p>Social media</p>

                </div>
            </div>
        </div>
    )
}

export default Contact