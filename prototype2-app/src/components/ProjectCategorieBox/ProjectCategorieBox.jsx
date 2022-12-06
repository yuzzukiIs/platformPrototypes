import './style.css';

import img1 from '../../img/studentsProjects.jpg'

const ProjectCategorieBox = (props) => {
    return (
        <div classNmae="projectCategorieBox">
            <img src={img1} alt="Categorie`s picture" />
            <div className="projectCategorieBox__title">
                {props.categorie}
            </div>
        </div>
    );
}
 
export default ProjectCategorieBox;
