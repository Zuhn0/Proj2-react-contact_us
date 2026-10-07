import styles from "./Button.module.css";

const Button = ({ isoutLine, text, icon, ...rest }) => {
    return (
        <button
            {...rest}
            className={isoutLine ? styles.outline_btn : styles.primary_btn}
        >
            {icon}
            {text}
        </button>
    );
};

export default Button;