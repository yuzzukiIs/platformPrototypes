
import ProjectCategorieBlock from '../../components/ProjectCategorieBlock/ProjectCategorieBlock.jsx';
import PersonalArea from '../../components/PersonalArea/PersonalArea.jsx';


import './style.css';

const WorkSpace = () => {
    return (
        <>
            <div clasName="workSpace">
                <ProjectCategorieBlock />
                <PersonalArea />
            </div>
            <div className="mediaPage">
                Пожалуйста, поверните устройство на 90 градусов
            </div>
        </>
    );
}

export default WorkSpace;