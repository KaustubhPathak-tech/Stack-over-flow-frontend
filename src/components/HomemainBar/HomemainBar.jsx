import React from 'react'


import {  useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomemainBar.css'
import QuestionList from './QuestionList'



const Homemainbar = () => {
  const location = useLocation()
  var user = useSelector((state) => (state.fetch_current_userReducer))
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)

 
  const redirect = () => { user === null ? navigate('/login') : navigate('/AskQuestions') }

  return (
    <div>
      <div className='intro-container'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button className='ask-btn' onClick={redirect}>Ask Question</button>
        
        {/* <Link to='/AskQuestions' className='ask-btn' onClick={authenticate}>Ask  Question</Link> */}

      </div>

        

      <div>
        {
          questionsList.data === null ? <h1>Loading...</h1> :
            <>
              <p id="noOfQuestions">{questionsList.data.length} Questions </p>
              <QuestionList questionsList={questionsList.data} />
            </>

        }
      </div>
    </div >
  )
}

export default Homemainbar
