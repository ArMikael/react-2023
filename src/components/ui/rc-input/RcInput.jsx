import classes from './RcInput.module.scss'

const RcInput = (props) => {
    return (
        <input className={classes.rcInput} {...props}/>
    )
};

export default RcInput;