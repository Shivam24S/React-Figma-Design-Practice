import classes from "./homePage.module.css";
import BackgroundImg from "../../assets/Background.svg";
import GroupPhoto from "../../assets/group photo.svg";

const HomePage = () => {
  return (
    <>
      <main>
        <div className={classes.background}>
          <img src={BackgroundImg} alt="backGround Img" />
        </div>
        <div className={classes.textContent}>
          <div className={classes.heading}>
            <h1>
              A powerful online engagement tool <br /> that’s intuitive and
              simple to use.
            </h1>
            <div className={classes.paraText}>
              <p>
                With stellar one-click reports and unmatched support, see how{" "}
                <br />
                Circle will make a difference in your business.
              </p>
            </div>
            <div className={classes.txtBtn}>
              <button>Get started free </button>
            </div>
          </div>
        </div>
        <div className={classes.grpPhoto}>
          <img src={GroupPhoto} alt="group photo" />
        </div>
      </main>
    </>
  );
};
export default HomePage;
