import './style.css';


const ProjectCategorieBox = (props) => {
    return (
        <div className="projectCategorieBox">
            <img src={props.img} alt="Categorie Image"/>
            <div className="projectCategorieBox__title">
                {props.categorie1}<br/>
                {props.categorie2}<br/>
                {props.categorie3}<br/>
                {props.categorie4}<br/>
                {props.categorie5}
            </div>
        </div>
    );
}

export default ProjectCategorieBox;
