import PropTypes from "prop-types";
import classes from "../Button/Button.module.scss";
import Icon from "../Icon/Icon";

const Button = (props) => {
    const {
        type = 'button--primary',
        mode = 'button--default',
        size = 'button--medium',
        shape = 'square',
        label,
        icon,
        onClick
    } = props


    const iconLabel =(label && shape == 'circle') ? classes['no-label'] : '';
    console.log('label',label)
    console.log('shape',shape)
    console.log('ddd',iconLabel)
    const buttonClasses = [classes.button, classes[size], classes[type], classes[shape], iconLabel].join(' ');

    return (
        <button onClick={onClick && onClick} className={buttonClasses} data-mode={mode}>
            {icon && <Icon color={'grey'} type={icon} size={'small'}/>}
            {shape === 'square' && label}
        </button>
    )
}
export default Button

Button.propTypes = {

    /**
     * Choose your button type
     */
    type: PropTypes.oneOf(['button--primary', 'button--secondary']),

    /**
     * Choose the mode of button
     */
    mode: PropTypes.oneOf(['button--default', 'button--hover', 'button--active', 'button--focus', 'button--disabled', 'button--loader']),

    /**
     * Choose the size
     */
    size: PropTypes.oneOf(['button--small', 'button--medium', 'button--large']), /**
     * Choose the shape
     */
    shape: PropTypes.oneOf(['circle', 'square']),
    /**
    * Choose the icon
    */
    icon:  PropTypes.oneOf(['', 'beer', 'checkmark', 'cross', 'facebook', 'instagram', 'lock', 'menu', 'play', 'twitter'])

}

Button.defaultProps = {
    type: 'button--primary',
    mode: 'button--default',
    size: 'button--medium',
    shape: 'square'
};