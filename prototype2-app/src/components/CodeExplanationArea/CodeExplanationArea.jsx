import './style.css';

const CodeExplanationArea = (props) => {
    return (
        <div className="explanationField" placeholder="логин">{props.text}</div>
    );
}
 
export default CodeExplanationArea;