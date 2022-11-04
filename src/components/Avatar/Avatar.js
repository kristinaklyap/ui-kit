import classes from "./Avatar.module.scss";
import PropTypes from "prop-types";

const Avatar = (props) => {
    const {emoji = 'cat', type = 'circle', size = 'medium'} = props;
    const avatarClasses = [classes[type], classes[size], classes['avatar']].join(' ');

    const symbol = {
        cat: '😸',
        ghost: '👻',
        lion: '🦁',
        girl: '👩🏻‍💻',
        boy: '🧑🏻‍💻'

    }
    return (
        <div className={avatarClasses}>
               <span
                   className="emoji"
                   role="img"
                   aria-label={props.label ? props.label : ""}
                   aria-hidden={props.label ? "false" : "true"}
               >
                   {symbol[emoji]}
               </span>
        </div>
    )
}
export default Avatar


Avatar.propTypes = {

    /**
     * Choose your fav emoji :)
     */
    emoji: PropTypes.oneOf(['cat', 'lion', 'ghost', 'girl', 'boy']),

    /**
     * Choose your fav emoji :)
     */
    type: PropTypes.oneOf(['circle', 'square']),

    /**
     * Choose your fav emoji :)
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

};

Avatar.defaultProps = {
    emoji: 'cat',
    type: 'circle',
    size: 'medium'
};