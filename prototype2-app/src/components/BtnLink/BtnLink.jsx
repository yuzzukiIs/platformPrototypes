import './style.css';

const BtnLink = (props) => {
    return (
        <div className="linkBlock">
            <a target="_blank" rel="noreferrer">{props.text}</a>
        </div>
    );
}
 
export default BtnLink;