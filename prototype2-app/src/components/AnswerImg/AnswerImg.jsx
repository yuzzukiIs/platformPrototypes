import styles from '../answerStyles.module.css';
import './style.css';
const AnswerImg = (props) => {
    return (
        <div className={styles.mainStyle}>
            <img src={props.img} alt="illustration"/>
        </div>
    );
}
 
export default AnswerImg;