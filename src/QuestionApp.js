import './index.css'
import data from './data'
import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import {
    Button, Modal, ModalBody, ModalHeader, Label, Row, Col
} from "reactstrap";

function QuestionApp() {
    const [questions, setQuestions] = useState(data)
    const [newQuestion, setNewQuestion] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleSubmit = () => {
        let newQ = {
            id: questions.length + 1,
            title: newTitle,
            info: newQuestion,
        }
        setQuestions([...questions, newQ])
        console.log(questions);
    }
    return (
        <>
            <main>
                <div className='container'>
                    <h3>Question And Answer About Login</h3>
                    <section className='info'>
                        {questions.map((question) => {
                            return <SingleQuestion key={question.id} {...question} />
                        })}

                    </section>
                    <div hidden={isModalOpen}>
                        <label>Enter title: </label>

                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <label>Enter question: </label>

                        <input
                            type="text"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                        />
                        <button onClick={handleSubmit}>ADD NEW QUESTION</button>
                    </div>

                    <button onClick={() => setIsModalOpen(!isModalOpen)}>Add Question</button>
                </div>
            </main>


        </>

    );
}

export default QuestionApp;