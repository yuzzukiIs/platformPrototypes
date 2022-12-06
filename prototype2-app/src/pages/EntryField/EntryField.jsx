import { NavLink } from 'react-router-dom';

import EntryFieldBackgroundBand from '../../components/EntryFieldBackgroundBand/EntryFieldBackgroundBand.jsx';

import InputLogin from '../../components/Inputs/InputLogin/InputLogin.jsx';
import InputPassword from '../../components/Inputs/InputPassword/InputPassword.jsx';
import BtnLink from '../../components/BtnLink/BtnLink.jsx';
import BtnExecute from '../../components/BtnExecute/BtnExecute.jsx';

import styles from '../styles.module.css';
import './style.css'


const WriteField = () => {
    return (
        <>
            <EntryFieldBackgroundBand />
            <div className={styles.field}>
                <div className="field  field__languageField">
                    <a target="_blank" rel="noreferrer" className="languageField  field__languageField__link">РУ</a>
                    <a target="_blank" rel="noreferrer" className="languageField  field__languageField__link">КР</a>
                    <a target="_blank" rel="noreferrer" className="languageField  field__languageField__link">EN</a>
                </div>
                <NavLink to="/registrationField"><BtnLink text="регистрация" /></NavLink>
                <InputLogin />
                <InputPassword />
                <NavLink to="/user/questions"><BtnExecute text="войти" /></NavLink>
                <NavLink to="/newPasswordField"><BtnLink text="забыли пароль?" /></NavLink>
            </div>
        </>
    );
}

export default WriteField;