import Title from "../components/Title/Title";
import Avatar from "../components/Avatar/Avatar";
import TextField from "../components/TextField/TextField";
import "../styles/main.scss";

const AvatarPage = () => {
  return (
    <>
      <Title headingLevel={4} label={"Avatar Component Page"} />
      <div className={"display-flex"}>
        <div className={"margin-right-1"}>
          <Avatar emoji={"cat"} />
          <TextField alignment={"to_center"} label={"cat"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"sheep"} />
          <TextField alignment={"to_center"} label={"sheep"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"girl"} />
          <TextField alignment={"to_center"} label={"girl"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"boy"} />
          <TextField alignment={"to_center"} label={"boy"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"ghost"} />
          <TextField alignment={"to_center"} label={"ghost"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"ufo"} />
          <TextField alignment={"to_center"} label={"ufo"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar emoji={"lion"} />
          <TextField alignment={"to_center"} label={"lion"} />
        </div>
      </div>
      <div>
        <Title headingLevel={6} label={"Type square"} />
        <div className={"margin-right-1"}>
          <Avatar type={"square"} emoji={"cat"} />
          <TextField alignment={"to_left"} label={"cat"} />
        </div>
      </div>
      <Title headingLevel={6} label={"Sizes: small, medium and large"} />
      <div className={"display-flex"}>
        <div className={"margin-right-1"}>
          <Avatar size={"small"} emoji={"cat"} />
          <TextField alignment={"to_center"} label={"cat"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar size={"medium"} emoji={"cat"} />
          <TextField alignment={"to_center"} label={"cat"} />
        </div>
        <div className={"margin-right-1"}>
          <Avatar size={"large"} emoji={"cat"} />
          <TextField alignment={"to_center"} label={"cat"} />
        </div>
      </div>
      <div>
        <Title
          headingLevel={6}
          label={'Can be used with Texfield component as "Profile Details" '}
        />
        <div className={`display-flex`}>
          <div
            className={`display-flex justify-center direction-column align-center margin-right-1`}
          >
            <Avatar emoji={"cat"} />
            <TextField label={"Jon Doe"} size={"disclaimer"} />
          </div>
          <div
            className={`display-flex justify-center direction-column align-center margin-right-1`}
          >
            <Avatar emoji={"ghost"} type={"square"} />
            <TextField label={"Jane Smitch"} size={"disclaimer"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AvatarPage;
