import { useNavigate } from "react-router-dom";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import "../styles/font.module.css";
import style from "../styles/App.module.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.containerText}>
        <p>hi, im Maira coria.</p>
        <p>Welcome to my</p>
        <div className={style.linePorfolio}>
          <img className={style.porfolioImg}  src={`${process.env.PUBLIC_URL}/resume.png`} alt="resume" />
          <p>portfolio.</p>
        </div>
      </div>
      <div className={style.containerBootom}>
        <p className={style.text}>VERSION. 2025</p>
        <button className={style.btn} onClick={() => navigate("/work")}>
          <p>EXPLORE now</p>
          <MdOutlineSubdirectoryArrowRight />
        </button>
      </div>
      <img className={style.star}  src={`${process.env.PUBLIC_URL}/star2.png`}  alt="start" />
    </div>
  );
}

export default App;
