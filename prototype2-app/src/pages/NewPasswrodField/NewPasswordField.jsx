import { NavLink } from 'react-router-dom';


import EntryFieldBackgroundBand from '../../components/EntryFieldBackgroundBand/EntryFieldBackgroundBand.jsx';

import InputPassword from '../../components/Inputs/InputPassword/InputPassword.jsx';
import InputConfirmPassword from '../../components/Inputs/InputConfirmPassword/InputConfirmPassword.jsx';
import BtnExecute from '../../components/BtnExecute/BtnExecute.jsx';

import styles from '../styles.module.css';


const NewPasswordField = () => {
    return (
        <>
            <EntryFieldBackgroundBand />
            <div className={styles.field}>
                <InputPassword />
                <InputConfirmPassword />
                <NavLink to="/newPasswordFieldAnswer"><BtnExecute text="выполнить" /></NavLink>
            </div>
        </>
    );
}

export default NewPasswordField;