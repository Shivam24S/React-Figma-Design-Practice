import LogoSvg from "../../assets/Logo.svg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a href="">Features</a>{" "}
          </li>
          <li>
            <a href="">Pricing</a>{" "}
          </li>
          <li>
            <a href="">Testimonials</a>{" "}
          </li>
          <li>
            <a href="">Resources</a>{" "}
          </li>
          <li>
            <img src={LogoSvg} alt="Logo" />
          </li>
          <li>
            <a href="">Company</a>{" "}
          </li>
          <li>
            <a href="">Contact</a>{" "}
          </li>
          <li>
            <button className={classes.LoginBtn}>Login</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
