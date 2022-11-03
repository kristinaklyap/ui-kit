import React from "react";
import classes from "./Title.module.scss";
import PropTypes from "prop-types";

const Title = ({headingLevel = 3, ...props}) => {
    const Tag = `h${headingLevel}`;
    const bordered = props.bordered ? classes.bordered : '';
    const componentClasses = [classes.title, classes[props.alignment], bordered].join(' ');

    return (
        <Tag className={componentClasses}>{props.label}</Tag>
    );
};

export default Title;

Title.propTypes = {
    /**
     * Title contents
     */
    label: PropTypes.string.isRequired,
    /**
     * How large should the Title be?
     */
    headingLevel: PropTypes.oneOf([1,2,3,4,5,6]),
    /**
     * Should we add the border to the Title component?
     */
    bordered: PropTypes.bool,
    /**
     * Should it be aligned?
     */
    alignment: PropTypes.oneOf(['to_left', 'to_center', 'to_right'])

};

Title.defaultProps = {
    label: 'My fancy Title',
    headingLevel: 1,
    bordered: false,
    alignment: 'to_left'
};
