import Button from "../../components/Button/Button";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header className={`${classes.header}`}>
        <div className={classes.logo}>
          <svg id="Component_2_1" data-name="Component 2 – 1" xmlns="http://www.w3.org/2000/svg" width="104.166" height="114.582" viewBox="0 0 104.166 114.582">
            <path id="Path_2" data-name="Path 2" d="M36.084,1.221q-12.451,0-18.628-4.834A20.771,20.771,0,0,1,9.644-14.99,62.993,62.993,0,0,1,8.008-30.176V-71.582H17.48v41.26q0,14.111,4.736,18.555T36.084-7.324q9.131,0,13.867-4.443t4.736-18.555v-41.26h9.521v41.406q0,12.988-3.1,19.141a20.03,20.03,0,0,1-9.351,9.2Q45.508,1.221,36.084,1.221Z" transform="translate(-8.008 85.582)"/>
            <path id="Path_1" data-name="Path 1" d="M65.174,0H52.924L28.041-34.979,17.131-24.309V0H7.848V-70.15h9.283v34.788L51.345-70.15H63.882L34.5-41.344Z" transform="translate(38.992 114.582)"/>
            <path id="Path_3" data-name="Path 3" d="M16.016,0H6.787V-51.807h9.229Zm0-61.621H6.787v-9.961h9.229Z" transform="translate(39.992 71.582)"/>
          </svg>
        </div>
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
