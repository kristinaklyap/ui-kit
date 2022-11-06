import classes from "../Icon/Icon.module.scss";
import icons from "../../assets/icons"
import PropTypes from "prop-types";

const Icon = (props) => {
    const {type = 'beer', size = 'medium', color = 'grey'} = props;
    const iconClasses = [classes.icon, classes[size], classes[color]].join(' ');

    return (
        <span className={iconClasses} aria-label={`${type} icon`}>
           <img src={icons[type]} alt={`${type} icon`}/>
        </span>
    )
}
export default Icon


Icon.propTypes = {

    /**
     * Choose your fav icon type
     */
    type: PropTypes.oneOf(['beer', 'checkmark', 'cross', 'facebook', 'instagram', 'lock', 'menu', 'play', 'twitter']),

    /**
     * Choose the color of icon
     */
    color: PropTypes.oneOf(['black', 'white', 'grey', 'grey-dark', 'forest', 'forest-dark']),

    /**
     * Choose the size
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

};

Icon.defaultProps = {
    type: 'beer',
    color: 'grey',
    size: 'medium'
};