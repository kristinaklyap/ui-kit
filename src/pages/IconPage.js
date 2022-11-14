import Icon from "../components/Icon/Icon";
import Title from "../components/Title/Title";
import TextField from "../components/TextField/TextField";

const IconPage = () => {
  return (
    <>
      <Title headingLevel={4} label={"Icon Component Page"} />
      <div className={"display-flex"}>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"beer"} />
          <TextField alignment={"to_center"} label={"beer"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"checkmark"} />
          <TextField alignment={"to_center"} label={"checkmark"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"cancel"} />
          <TextField alignment={"to_center"} label={"cancel"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"facebook"} />
          <TextField alignment={"to_center"} label={"facebook"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"instagram"} />
          <TextField alignment={"to_center"} label={"instagram"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"lock"} />
          <TextField alignment={"to_center"} label={"lock"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"play"} />
          <TextField alignment={"to_center"} label={"play"} />
        </div>
        <div
          className={
            "display-flex direction-column align-center margin-top-2 margin-bottom-2 margin-right-2"
          }
        >
          <Icon type={"twitter"} />
          <TextField alignment={"to_center"} label={"twitter"} />
        </div>
      </div>
    </>
  );
};
export default IconPage;
