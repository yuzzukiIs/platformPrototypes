import BtnAdd from '../BtnAdd/BtnAdd.jsx';

import './style.css';

const ProjectsCounterBlock = (props) => {
    return (
        <div className="projectsCounterBlock">
            <div className="projectsCounterBlock  projectsCounterBlock__text">
                {props.text}
            </div>
            <div className="projectsCounterBlock  projectsCounterBlock__valueBlock">
                <BtnAdd text={props.counterValue}/>
            </div>
        </div>
    );
}

export default ProjectsCounterBlock;