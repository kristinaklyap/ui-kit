import classes from "./Avatar.module.scss";
import PropTypes from "prop-types";

const SYMBOLS = {
    cat: '😸',
    ghost: '👻',
    lion: '🦁',
    girl: '👩🏻‍💻',
    boy: '🧑🏻‍💻',
    ufo:'👽',
    sheep:'🐑'
}

const Avatar = (props) => {
    const {emoji = 'cat', type = 'circle', size = 'medium'} = props;
    const avatarClasses = [classes[type], classes[size], classes['avatar']].join(' ');

    return (
        <div className={avatarClasses}>
               <span
                   className="emoji"
                   role="img"
                   aria-label={props.label ? props.label : ""}
                   aria-hidden={props.label ? "false" : "true"}
               >
                   {SYMBOLS[emoji]}
               </span>
        </div>
    )
}
export default Avatar


Avatar.propTypes = {

    /**
     * Choose your fav emoji :)
     */
    emoji: PropTypes.oneOf(Object.keys(SYMBOLS)),

    /**
     * Choose the shape of Avatar :)
     */
    type: PropTypes.oneOf(['circle', 'square']),

    /**
     * Choose the size of Avatar :)
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

};

Avatar.defaultProps = {
    emoji: 'cat',
    type: 'circle',
    size: 'medium'
};