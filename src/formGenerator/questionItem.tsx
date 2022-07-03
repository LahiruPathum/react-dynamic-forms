import React, { FC } from 'react';

type Props = {
    question: Question;
}
const QuestionItem: FC<Props> = ({question}) => {
    return (
        <div className='df-generator-form-question-container'>
            <p>{question.label}</p>
        </div>
    );
}

export { QuestionItem };