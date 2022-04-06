import React, { useEffect, useState } from 'react'
import { usePage, useForm } from '@inertiajs/inertia-react';
import App from '../layouts/app';
import { TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store/store'
import {
    changeTitleQuiz,
    addQuestion,
    changeTitleQuizItem,
    removeQuestion,
    addResponse,
    changeTitleQuestionItem,
    removeResponse,
    changeCheckResponse
} from './store/quizSlices'

const PubishedSvg = () => <svg width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"></path></svg>

export default function create() {
    const { cours } = usePage().props;
    return (<Provider store={store}>
        <div className='h-full w-full px-6 py-4 grid grid-cols-12 gap-2'>
            <div className='col-span-8'>
                <QuizzCreate />
            </div>
            <div className='col-span-4'>
                <InfoCours cours={cours} />
            </div>
        </div>
    </Provider>)
}

const InfoCours = ({ cours }) => {
    const quizzes = useSelector(state => state.quiz);
    const str = JSON.stringify(quizzes, null, 2)
    const { setData, post, processing } = useForm({ quizzes, cours_id: cours.id });
    useEffect(() => {
        setData('quizzes', quizzes)
    }, [quizzes])
    const submit = (e) => {
        e.preventDefault()
        post(route('quiz.store'))
    }

    return (<div className='bg-white rounded-md flex flex-col p-2'>
        <div className='border-b pb-2 mb-2'>
            <h3 className='font-inter font-extrabold text-2xl text-black tracking-tight'>{cours.title}</h3>
            <div className='mt-1 font-medium text-sm text-gray-500'>
                {cours.updated_at} · <a className='text-blue-600' href='#'>{cours.users[0].user_name}</a>
            </div>
            <div className="focus:outline-none flex flex-wrap py-4 w-full overflow-x-auto">
                <div className="min-w-max py-2 mb-1 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.cycle.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.level.name}</div>
                <div className="min-w-max py-2 mb-1 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{cours.matiere.name}</div>
            </div>
        </div>
        <div className='mb-2'>
            <LoadingButton
                loading={processing}
                loadingPosition="start"
                startIcon={<PubishedSvg />}
                onClick={submit}
                variant="outlined">
                Enregistrer
            </LoadingButton>
        </div>
        <div className='h-fit p-1 bg-gray-100'>
            {str}
        </div>
    </div>)
}

const QuizzCreate = () => {
    const dispatch = useDispatch()
    const quizzes = useSelector(state => state.quiz);

    return (<div className="bg-white rounded-md flex flex-col p-2">
        <div className="mb-4">
            <h1 className="font-inter font-extrabold text-2xl text-black tracking-tight">Créer votre Quizz</h1>
            <div className="flex items-center my-4">
                <TextField value={quizzes.title} onChange={(e) => { dispatch(changeTitleQuiz(e.target.value)) }} id="Nom du quizz" label="Nom du quizz" variant="outlined" fullWidth />
                <Button onClick={() => { dispatch(addQuestion()) }} variant='outlined'>nouvelle question</Button>
            </div>
            <div>
                <div className='flex flex-col'>
                    {quizzes.questions.map((question, index) => {
                        return <ItemQuestion key={index} question={question} />
                    })}
                </div>
            </div>
        </div>
    </div>)
}

const ItemQuestion = ({ question }) => {
    const dispatch = useDispatch()
    return (<div className='pb-2 mb-2 border-b-2'>
        <div className='flex items-center mb-2'>
            <TextField onChange={(e) => {
                dispatch(changeTitleQuizItem({ value: e.target.value, questionId: question.id }))
            }} value={question.title} label="Nom de la question" variant="outlined" fullWidth />
            <button onClick={() => {
                dispatch(addResponse({ questionId: question.id }))
            }} className="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                </svg>
            </button>
            <button onClick={() => { dispatch(removeQuestion({ questionId: question.id })) }} className="uppercase p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 ">
                <svg width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    style={{ transform: "rotate(360deg)" }}>
                    <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                    <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                    <path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                        fill="currentColor"></path>
                    <path d="M12 2h8v2h-8z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
        {
            question.responses.map((response, index) => {
                return <ItemResponse key={index} response={response} questionId={question.id} />
            })
        }
    </div >)
}

const ItemResponse = ({ response, questionId }) => {
    const dispatch = useDispatch()
    return (<div className='flex items-center mb-2 ml-5'>
        <TextField onChange={(e) => {
            dispatch(changeTitleQuestionItem({
                value: e.target.value,
                responseId: response.id,
                questionId
            }))
        }} value={response.title} label="Réponse" variant="outlined" fullWidth />

        <button onClick={() => {
            dispatch(removeResponse({
                responseId: response.id,
                questionId,
            }))
        }} className="uppercase p-3 flex items-center bg-gray-500 hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 ">
            <svg width="32"
                height="32"
                viewBox="0 0 32 32"
                style={{ transform: "rotate(360deg)" }}>
                <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                <path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                    fill="currentColor"></path>
                <path d="M12 2h8v2h-8z" fill="currentColor"></path>
            </svg>
        </button>
        <button onClick={() => {
            dispatch(changeCheckResponse({
                responseId: response.id,
                questionId,
                value: !response.isCorrect
            }))
        }} className={` ${response.isCorrect ? 'bg-green-500 hover:bg-green-400 text-white' : 'bg-gray-500 hover:bg-gray-400 text-white'} uppercase p-3 flex items-center  max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10`}>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z"></path></svg>
        </button>
    </div>)
}


create.layout = (page) => (
    <App>
        {page}
    </App>
);
