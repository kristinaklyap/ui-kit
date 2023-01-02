import Title from "../components/Title/Title";
import TextField from "../components/TextField/TextField";

const TitlePage = () => {
    return (
        <>
            <Title headingLevel={4} label={"Title Component Page"}/>
            <TextField label={'Sizes: h1-h6'}/>
            <Title bordered={true} alignment="to_left" headingLevel={1} label={"Sample title"}/>
            <Title bordered={true} alignment="to_left" headingLevel={2} label={"Sample title"}/>
            <Title bordered={true} alignment="to_left" headingLevel={3} label={"Sample title"}/>
            <Title alignment="to_left" headingLevel={4} label={"Sample title"}/>
            <Title alignment="to_left" headingLevel={5} label={"Sample title"}/>
            <Title alignment="to_left" headingLevel={6} label={"Sample title"}/>

            <TextField className={'margin-top-5'} label={'Alignment: to_left, to_center, to_right'}/>
            <Title alignment="to_left" headingLevel={6} label={"Sample title"}/>
            <Title alignment="to_center" headingLevel={6} label={"Sample title"}/>
            <Title alignment="to_right" headingLevel={6} label={"Sample title"}/>

        </>
    );
};
export default TitlePage;
