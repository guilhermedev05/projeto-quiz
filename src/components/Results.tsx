import { Question } from "@/types/Question"
import { useState } from "react"

type Props = {
    questions: Question[],
    answers: number[]
}

export const Results = ({ questions, answers }: Props) => {

    const checkResult = (question: Question, key: number) => {
        return question.answer !== answers[key]
    }

    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span className={`${item.answer === answers[key] ? 'text-green-700' : 'text-red-500'}`}>{item.answer === answers[key] ? 'Acertou' : 'Errou'} - {item.options[answers[key]]}</span>
                        {checkResult(item, key) && (
                            <p>Resposta correta: {item.options[item.answer]}</p>
                        )
                        }
                    </div>
                </div>
            ))}
        </div>
    )
} 