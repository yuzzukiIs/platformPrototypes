import QuestionBox from '../QuestiuonBox/QuestionBox.jsx';

import styles from '../styles.module.css';
import './style.css';

const QuestionBlock = () => {
    return (
        <div className={styles.mainStyle}>
            <div className="questionsBlock  questionsBlock__title">
                Как работать с программой?
            </div>
            <div className="questionsBlock  questionsBlock__board">
                <QuestionBox question="Как выбирать проекты?"/>
                <QuestionBox question="Как убедиться в надёжност и проекта?"/>
                <QuestionBox question="Как инвестировать в проект?"/>
                <QuestionBox question="Сколько инвестировать в проект?"/>
            </div>
            <div className="questionsBlock  questionsBlock__board">
                <QuestionBox question="Как получать доходжы с инвестиций в преокты?"/>
                <QuestionBox question="Что делать, если проект поход на обман?"/>
                <QuestionBox question="Как опубликовать проект?"/>
                <QuestionBox question="Что может повысить рейтинг проекта?"/>
            </div>
        </div>
    );
}
 
export default QuestionBlock;