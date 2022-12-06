import AnswerContent from '../AnswerContent/AnswerContent.jsx';
import AnswerImg from '../AnswerImg/AnswerImg.jsx';

import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';


import './style.css'


const AnswersBand = () => {
    return (
        <div className="viewContent">
            <div className="viewContent-row">
                <AnswerContent
                    title="Как выбирать проекты?"
                    text1="Проведите пальцем направо."
                    text2="Выберите интересную вам категорию и нажмите на неё."
                    text3="Можете читать краткое описание проектов либо можете нажать “подробнее>>>” и почитать всё о проекте."
                />
                <AnswerImg img={img1} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Как убедиться в надёжности проекта?"
                    text1="У проекта понятное и детальное описание всех процессов."
                    text2="Проект “прислушивается” к своим инвесторам."
                    text3="За проектом можно следить в соц.сетях."
                />
                <AnswerImg img={img2} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Как инвестироват в проект?"
                    text1="Ниже описания проекта публикуются реквизиты счёта. Система для совершения оплат может быть разной для разных стран"
                    text2="Важно запомнить реквизиты проекта, во избежание проблем."
                />
                <AnswerImg img={img3} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Сколько инвестировать в проект?"
                    text1="У проекта может быть указана минимальная, а также максимальная сумма."
                    text2="Помните! Ответственность за переводы и их сохранность зависит от вас."
                />
                <AnswerImg img={img4} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Как получать доходы с инвестиций в проекты?"
                    text1="У проекта в описании обязательно должны быть указаны обязательные доли выплат вам за ваш вклад в проект."
                />
                <AnswerImg img={img4} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Что делать, если проект похож на обман?"
                    text1="Поставьте палец вниз проекту в карточке проекта и вашу оценку увидят все пользователи. Так система будет самоочищаться от мошенников."
                    text2="Такие преокты будут попать в ваш чёрный список."
                />
                <AnswerImg img={img1} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Как опубликовать проект?"
                    text1=""
                    text2=""
                    text3="" />
                <AnswerImg img={img2} />
            </div>
            <div className="viewContent-row">
                <AnswerContent
                    title="Что может повысить рейтинг проекта?"
                    text1=""
                    text2=""
                    text3="" />
                <AnswerImg img={img3} />
            </div>
        </div>
    );
}

export default AnswersBand;