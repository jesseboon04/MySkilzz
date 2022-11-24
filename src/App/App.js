import "./App.css"
import Questions from "../Data/questions"

import {BrowserRouter as Routes, Route, Link, } from 'react-router-dom';
import Intro from "../Home/Intro";



const App = () => {

    let QuestionsToBeRendered = Questions.map(questionObject => {
        return <Questions key={questionObject.number} number={questionObject.number} Question={questionObject.question} rating={questionObject.rating}/>
    })
    return (
        <>
        <Routes>
            <Route path="/#" element={<Intro />}></Route>
            <Route path="/vraag/:number" element={<Questions />}></Route>
        </Routes>
        </>


    )

}

export default App;