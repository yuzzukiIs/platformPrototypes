import styles from '../styles.module.css';


const InputPassword = () => {
    return (
        <input className={styles.inputField} type="password" placeholder="пароль"></input>
    );
}

export default InputPassword;