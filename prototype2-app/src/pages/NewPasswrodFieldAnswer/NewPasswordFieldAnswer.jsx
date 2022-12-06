import { NavLink } from 'react-router-dom';


import EntryFieldBackgroundBand from '../../components/EntryFieldBackgroundBand/EntryFieldBackgroundBand.jsx';

import CodeExplanationArea from '../../components/CodeExplanationArea/CodeExplanationArea.jsx';
import BtnExecute from '../../components/BtnExecute/BtnExecute.jsx';

import styles from '../styles.module.css';


const NewPasswordFieldAnswer = () => {
    return (
        <>
            <EntryFieldBackgroundBand />
            <div className={styles.field}>
                <CodeExplanationArea text="На вашу электронную почту отправлено письмо с вашей секретной фразой. Пожалуйста подтвердите, что это вы." />
                <NavLink to="/"><BtnExecute text="хорошо" /></NavLink>
            </div>
        </>
    );
}

export default NewPasswordFieldAnswer;