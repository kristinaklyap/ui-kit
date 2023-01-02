import Button from "../../components/Button/Button";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header className={`${classes.header}`}>
        <Link to={'/'} className={classes.logo}>
          <svg id="Component_2_1" data-name="Component 2 – 1" xmlns="http://www.w3.org/2000/svg" width="104.79" height="100.582" viewBox="0 0 104.79 100.582">
            <path id="Path_2" data-name="Path 2" d="M36.084,1.221q-12.451,0-18.628-4.834A20.771,20.771,0,0,1,9.644-14.99,62.993,62.993,0,0,1,8.008-30.176V-71.582H17.48v41.26q0,14.111,4.736,18.555T36.084-7.324q9.131,0,13.867-4.443t4.736-18.555v-10.43h9.521v10.577q0,12.988-3.1,19.141a20.03,20.03,0,0,1-9.351,9.2Q45.508,1.221,36.084,1.221Z" transform="translate(-8.008 71.582)"/>
            <path id="Path_1" data-name="Path 1" d="M65.8,0H53.417L28.267-34.979,17.24-24.309V0H7.857L7-73.949l5.059-9.586,5.184,9.586v38.587L51.821-70.15H64.492L34.8-41.344Z" transform="translate(38.992 100.582)"/>
            <path id="Path_4" data-name="Path 4" d="M56.172,50.4" transform="translate(0 -14)" fill="none" stroke="#707070" strokeWidth="1"/>
            <path id="Path_5" data-name="Path 5" d="M62.743,43.923h0Z" transform="translate(-2.528 -17)" fill="#fff"/>
            <path id="Path_6" data-name="Path 6" d="M46.84,19.332V11.349H57.023v7.983Z" transform="translate(-0.85 -11.349)"/>
          </svg>

        </Link>
        <Button
          icon={"beer"}
          type={"button--secondary"}
          size={"button--medium"}
          label={"Switch theme"}
          onClick={props.changeThemeHandler}
        />
      </header>
      <div className={"display-flex flex-wrap  padding-right-2 padding-left-2"}>
        {/*<Link className={"margin-right-2 margin-top-2"} to={"/"}>*/}
        {/*  Home*/}
        {/*</Link>*/}
        <Link className={"margin-right-2 margin-top-2"} to={"/avatar"}>
          Avatar
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/button"}>
          Button
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/icon"}>
          Icon
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/input"}>
          Input
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/Notification"}>
          Notification
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/quote"}>
          Quote
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/textfield"}>
          Textfield
        </Link>
        <Link className={"margin-right-2 margin-top-2"} to={"/title"}>
          Title
        </Link>
      </div>
    </>
  );
};
export default Header;
