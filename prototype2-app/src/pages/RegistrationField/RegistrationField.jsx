import { NavLink } from 'react-router-dom';


import EntryFieldBackgroundBand from '../../components/EntryFieldBackgroundBand/EntryFieldBackgroundBand.jsx';

import CodeExplanationArea from '../../components/CodeExplanationArea/CodeExplanationArea.jsx';
import InputLogin from '../../components/Inputs/InputLogin/InputLogin.jsx';
import InputPassword from '../../components/Inputs/InputPassword/InputPassword.jsx';
import InputConfirmPassword from '../../components/Inputs/InputConfirmPassword/InputConfirmPassword.jsx';
import InputSecretPhrase from '../../components/Inputs/InputSecretPhrase/InputSecretPhrase.jsx';
import BtnExecute from '../../components/BtnExecute/BtnExecute.jsx';

import styles from '../styles.module.css';


const RegistrationField = () => {
    return (
        <>
            <EntryFieldBackgroundBand />
            <div className={styles.field}>
                <CodeExplanationArea text="Секретная фраза обязательно должна  состоять из латинских символов!" />
                <InputLogin />
                <InputPassword />
                <InputConfirmPassword />
                <InputSecretPhrase />
                <NavLink to="/"><BtnExecute text="зарегистрироваться" /></NavLink>
            </div>
        </>
    );
}

export default RegistrationField;