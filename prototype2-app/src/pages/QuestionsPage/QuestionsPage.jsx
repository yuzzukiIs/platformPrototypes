import { NavLink } from 'react-router-dom';

import QuestionBlock from '../../components/QuestionBlock/QuestionBlock.jsx';
import AnswerBand from '../../components/AnswersBand/AnswersBand.jsx';
import PageLinkBtnRight from '../../components/PageLinkBtn/PageLinkBtnRight/PageLinkBtnRight.jsx';


import './style.css';


const QeustionsPage = () => {
    return (
        <>
            <div className="questionsPage">
                <QuestionBlock />
                <AnswerBand />
                <NavLink to="/user/workSpace/"><PageLinkBtnRight /></NavLink>
            </div>
            <div className="mediaPage">
                Пожалуйста, поверните устройство на 90 градусов
            </div>
        </>
    );
}

export default QeustionsPage;