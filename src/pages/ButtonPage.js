import Button from "../components/Button/Button";
import Title from "../components/Title/Title";

const ButtonPage = () => {
  return (
    <>
      <Title headingLevel={4} label={"Button Component Page"} />
      <Title headingLevel={6} label={"Buttons"} />
      <div className={"display-flex"}>
        <Button type={"button--primary"} size={"button--medium"} label={"Button Primary"} />
        <Button type={"button--secondary"} size={"button--medium"} label={"Button Secondary"} />
      </div>
      <Title headingLevel={6} label={"Button with icons"} />
      <div className={"display-flex align-center"}>
        <Button
          icon={"lock"}
          type={"button--primary"}
          size={"button--medium"}
          label={"Button Primary"}
        />
        <Button
          icon={"beer"}
          type={"button--secondary"}
          size={"button--medium"}
          label={"Button Secondary"}
        />
      </div>
      <Title headingLevel={6} label={"Button with: small, medium and large sizes"} />
      <div className={"display-flex  align-center"}>
        <Button type={"button--primary"} size={"button--small"} label={"Button Primary"} />
        <Button type={"button--primary"} size={"button--medium"} label={"Button Secondary"} />
        <Button type={"button--primary"} size={"button--large"} label={"Button Primary"} />
      </div>
      <Title headingLevel={6} label={"Button with: small, medium and large sizes and icons"} />
      <div className={"display-flex  align-center"}>
        <Button
          icon={"checkmark"}
          type={"button--primary"}
          size={"button--small"}
          label={"Button Primary"}
        />
        <Button
          icon={"checkmark"}
          type={"button--primary"}
          size={"button--medium"}
          label={"Button Secondary"}
        />
        <Button
          icon={"checkmark"}
          type={"button--primary"}
          size={"button--large"}
          label={"Button Primary"}
        />
      </div>

      <Title headingLevel={6} label={"Button disabled"} />
      <Button
        mode={"button--disabled"}
        icon={"checkmark"}
        type={"button--primary"}
        size={"button--small"}
        label={"Button Primary"}
      />

      <Title headingLevel={6} label={"Button loader"} />
      <Button
        mode={"button--loader"}
        shape={"circle"}
        type={"button--primary"}
        size={"button--small"}
        label={"Button Primary"}
      />
    </>
  );
};

export default ButtonPage;
