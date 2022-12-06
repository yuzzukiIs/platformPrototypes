import './style.css';

const QuestionBox = (props) => {
    return (
        <div className="questionBox">
            {props.question}
        </div>
    );
}
 
export default QuestionBox;