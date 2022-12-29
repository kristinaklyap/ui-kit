import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Title bordered={true} alignment="to_left" headingLevel={3} label={"My UI Kit"} />
        <Button
          icon={"beer"}
          type={"button--secondary"}
          size={"button--medium"}
          label={"Switch mode"}
          onClick={props.changeThemeHandler}
        />
      </header>
      <div className={"display-flex"}>
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
