import {NavLink} from 'react-router-dom';


import ProjectCategorieBox from '../ProjectCategorieBox/ProjectCategorieBox.jsx';
import './style.css';



const ProjectCategorieBlock = () => {
    return (
        <div className="projectCategorieBlock">
            <div className="projectCategorieBlock  projectCategorieBlock__row">
                <ProjectCategorieBox img={require('../../img/studentsProjects.jpg')} categorie1="студенческие" categorie2="проекты"/>
                <ProjectCategorieBox img={require('../../img/tourism.jpg')} categorie1="туризм" />
                <ProjectCategorieBox img={require('../../img/agriculture.jpg')} categorie1="агрокультура" />
                <ProjectCategorieBox img={require('../../img/charity.jpg')} categorie1="благотвори-" categorie2="тельность" categorie3="и" categorie4="помощь пострадав-" categorie5="шим" />
            </div>
            <div className="projectCategorieBlock  projectCategorieBlock__row">
                <ProjectCategorieBox img={require('../../img/itStartups.jpg')} categorie1="цифровые" categorie2="технологии" />
                <ProjectCategorieBox img={require('../../img/highTechnolies.jpg')} categorie1="промышлен-" categorie2="ность" />
                <ProjectCategorieBox img={require('../../img/governmentProjects.jpeg')} categorie1="государ-" categorie2="ственные" categorie3=" проекты" />
                <ProjectCategorieBox img={require('../../img/other.jpg')} categorie1="другое" />
            </div>
        </div>
    );
}

export default ProjectCategorieBlock;