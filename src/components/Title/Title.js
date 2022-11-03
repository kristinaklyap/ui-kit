import React from "react";
import classes from "./Title.module.scss";

const Title = ({headingLevel = 3, ...props}) => {
    const Tag = `h${headingLevel}`;
    return (
        <Tag className={classes.title}>{props.children}</Tag>
    );
};

export default Title;
