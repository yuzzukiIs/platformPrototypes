import styles from '../answerStyles.module.css';
import './style.css';

const AnswerContent = (props) => {
    return (
        <div className={styles.mainStyle}>
            <div className="answerTitle">
                {props.title}
            </div>
            <ul>
                <li>{props.text1}</li>
                <li>{props.text2}</li>
                <li>{props.text3}</li>
            </ul>
        </div>
    );
}
 
export default AnswerContent;