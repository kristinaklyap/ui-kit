import Quote from "../components/Quote/Quote";
import Title from "../components/Title/Title";

const QuotePage = () => {
    return (
        <>
            <Title headingLevel={4} label={"Quote Component Page"}/>

            <Quote
                size={"like-p"}
                mode="italic"
                alignment={"to_center"}
                content={"Lorem ipsum dolor sit amet. Est atque ipsam eos cupiditate voluptate ut aperiam accusamus id consequatur consectetur in ipsa illum!"}
            />

            <Title headingLevel={6} label={"Sizes: like-disclaimer, like-p, like-h6, etc"}/>
            <Quote
                size={"like-h6"}
                bordered={false}
                alignment={"to_center"}
                content={"Sample Quote with h6!"}
            />
            <Title headingLevel={6} label={"Alignment: to_left, to_center, to_right"}/>
            <Quote
                size={"like-disclaimer"}
                bordered={false}
                alignment={"to_left"}
                content={"Sample Quote - to_left"}
            /> <Quote
            size={"like-disclaimer"}
            bordered={false}
            alignment={"to_center"}
            content={"Sample Quote - to_center"}
        /> <Quote
            size={"like-disclaimer"}
            bordered={false}
            alignment={"to_right"}
            content={"Sample Quote  - to_right"}
        />
            <Title headingLevel={6} label={"Bordered: true / false"}/>
            <Quote
                size={"like-p"}
                mode="italic"
                bordered={true}
                alignment={"to_center"}
                content={"Lorem ipsum dolor sit amet. Est atque ipsam eos cupiditate voluptate ut aperiam accusamus id consequatur consectetur in ipsa illum!"}
            />
            <Quote
                size={"like-p"}
                mode="italic"
                bordered={false}
                alignment={"to_center"}
                content={"Lorem ipsum dolor sit amet. Est atque ipsam eos cupiditate voluptate ut aperiam accusamus id consequatur consectetur in ipsa illum!"}
            />
            <Title headingLevel={6} label={"Mode: italic, bold"}/>
            <Quote
                size={"like-p"}
                mode="italic"
                bordered={false}
                alignment={"to_center"}
                content={"Lorem ipsum dolor sit amet."}
            /> <Quote
            size={"like-p"}
            mode="bold"
            bordered={false}
            alignment={"to_center"}
            content={"Lorem ipsum dolor sit amet."}
        />


        </>
    );
};
export default QuotePage;
