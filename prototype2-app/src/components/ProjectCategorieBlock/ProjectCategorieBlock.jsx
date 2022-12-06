import ProjectCategorieBox from '../../components/ProjectCategorieBox/ProjectCategorieBox.jsx';

import './style.css';

const ProjectCategorieBlock = () => {
    return (
        <div className="projectCategorieBlock">
            <div className="projectCategorieBlock  projectCategorieBlock__row">
                <ProjectCategorieBox categorie="студенты"/>
            </div>
            <div className="projectCategorieBlock  projectCategorieBlock__row">
                <ProjectCategorieBox categorie="цифровые технологии"/>
            </div>
        </div>
    );
}
 
export default ProjectCategorieBlock;