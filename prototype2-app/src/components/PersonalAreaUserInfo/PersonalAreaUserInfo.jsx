import {NavLink} from 'react-router-dom';

import BtnExecute from '../BtnExecute/BtnExecute.jsx';


import './style.css';


const PersonalAreaUserInfo = () => {
    return (
        <div className="personalAreaUserInfo">
            <div className="personalAreaUserInfo personalAreaUserInfo__box">
                <BtnExecute text="example@.gmail.com" />
            </div>
            <div className="personalAreaUserInfo personalAreaUserInfo__box">
                <p>личный кабинет</p>
            </div>
            <div className="personalAreaUserInfo personalAreaUserInfo__box">
                <NavLink to="/newPasswordField"><BtnExecute text="изменить пароль" /></NavLink>
            </div>
        </div>
    );
}

export default PersonalAreaUserInfo;