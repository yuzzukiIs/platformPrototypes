import styles from '../styles.module.css';


const InputSecretPhrase = () => {
    return (
        <input className={styles.inputField} type="password" placeholder="секретная фраза"></input>
    );
}

export default InputSecretPhrase;