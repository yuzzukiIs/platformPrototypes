import {NavLink} from 'react-router-dom';

import PersonalAreaUserInfo from '../PersonalAreaUserInfo/PersonalAreaUserInfo.jsx';
import ProjectsCounterBlock from '../ProjectsCounterBlock/ProjectsCounterBlock.jsx';
import BtnAdd from '../BtnAdd/BtnAdd.jsx';

import './style.css';

const PersonalArea = () => {
    return (
        <div className="personalArea">
            <PersonalAreaUserInfo />
            <div className="personalArea  personalArea__counterBlock">
                <ProjectsCounterBlock text="Избранных проектов" counterValue="21"/>
                <ProjectsCounterBlock text="Проекты в чёрном списке" counterValue="3"/>
                <ProjectsCounterBlock text="Собственные проекты" counterValue="1"/>
            </div>
            <div className="personalArea  personalArea__addBtnBlock">
                <NavLink to="/user/addNewProject"><BtnAdd text="добавить новый проект"/></NavLink>
            </div>
        </div>
    );
}
 
export default PersonalArea;