import TextField from "../components/TextField/TextField";
import Title from "../components/Title/Title";

const TextFieldPage = () => {
    return (
        <>
            <Title headingLevel={4} label={"TextField Component Page"}/>

            <TextField
                label={"Lorem ipsum dolor sit amet. Qui laboriosam repudiandae qui porro facere eos suscipit quaerat et saepe iure. Ut rerum incidunt est dolorem voluptatibus et placeat ipsa est reiciendis consequatur et quia quis! Sed molestiae suscipit id sunt minus et placeat libero sed explicabo deleniti ea mollitia pariatur ut quis ipsum sed distinctio quis. Est quia tempora ea doloribus unde qui itaque nemo rem dolores rerum."}
                size={"p"}
                weight={"regular"}
                alignment={"to_left"}
            />

            <Title className={'margin-top-4'} headingLevel={6}
                   label={"Choose 'tag' between h1-h6 and p. Also keep in mind that you can style your 'p' tag like h1 and still be consistent with your heading hierarchy"}/>
            <TextField
                label={"This is h3 tag with 'p' font-size."}
                size={"p"}
                tag={"h3"}
                weight={"regular"}
                alignment={"to_left"}
            />

            <Title className={'margin-top-4'} headingLevel={6}
                   label={"Choose weight: light, regular, medium, semibold, bold"}/>
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"light"}
                alignment={"to_left"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"regular"}
                alignment={"to_left"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"medium"}
                alignment={"to_left"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"semibold"}
                alignment={"to_left"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"semibold"}
                alignment={"to_left"}
            />
            <Title className={'margin-top-4'} headingLevel={6}
                   label={"TextField can be aligned: to_left, to_center or to_right"}/>
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"semibold"}
                alignment={"to_left"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"semibold"}
                alignment={"to_center"}
            />
            <TextField
                label={"Lorem ipsum dolor sit amet."}
                size={"p"}
                weight={"semibold"}
                alignment={"to_right"}
            />
        </>
    );
};
export default TextFieldPage;
