import {NavLink} from 'react-router-dom';

import ProjectCategorieBlock from '../../components/ProjectCategorieBlock/ProjectCategorieBlock.jsx';
import PersonalArea from '../../components/PersonalArea/PersonalArea.jsx';
import PageLinkBtnLeft from '../../components/PageLinkBtn/PageLinkBtnLeft/PageLinkBtnLeft.jsx';


import './style.css';

const WorkSpace = () => {
    return (
        <>
            <div clasName="workSpace">
                <ProjectCategorieBlock />
                <PersonalArea />
                <NavLink to="/user/questions"><PageLinkBtnLeft /></NavLink>
            </div>
            <div className="mediaPage">
                Пожалуйста, поверните устройство на 90 градусов
            </div>
        </>
    );
}

export default WorkSpace;