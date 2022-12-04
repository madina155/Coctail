import React from 'react';
import QuestionsItem from "./QuestionsItem/QuestionsItem";
import {questionData} from './QuestionsItem/question'

const Questions = () => {

    return (
        <section className="questions">
            <div className="container">
                <div className="questions__titles">
                    <h2 className="questions__title">Часто задаваемые вопросы</h2>
                    <span className="questions__text">FAQ</span>
                </div>

                <ul className="questions__list">

                    {
                        questionData.map((item) => (
                            <QuestionsItem item={item}/>
                        ))
                    }


                </ul>

            </div>
        </section>
    );
};

export default Questions;