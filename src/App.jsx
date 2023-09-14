import { useEffect, useReducer } from 'react'
import { AppContext, AppDispatchContext } from "./AppContext";
import AppReducer from "./AppReducer";

import Header from './components/Header'
import Footer from './components/Footer';
import Login from './components/Login';
import TableSelect from './components/TableSelect';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import Result from './components/Result'


import { getInitialState, createScoreData, getNameKey } from "./utils/Functions";


function App() {

  const [state, dispatch] = useReducer(AppReducer, getInitialState())
  const scoreData = createScoreData(state.userName)

  useEffect(() => {
    console.log("Name, Score is", state.userName, state.score, scoreData)
    // check name not null
    if(state.userName && !scoreData.name) {
      // set score data
      console.log('Set USERNAME', scoreData)
      // set name
      scoreData['name'] = state.userName
      // Set to LC
      localStorage.setItem(getNameKey(state.userName), JSON.stringify(scoreData));
    }
    // check score not null

    if(state.score > 0) {
      console.log("xTABLE AND SCORE", state.table, state.score)
      scoreData.tables[state.table - 1] = state.score
      localStorage.setItem(getNameKey(state.userName), JSON.stringify(scoreData));
    }

  }, [state.userName, state.score, scoreData, state.table])
  

  // useEffect(() => {
  //   if(answerRef && answerRef.current) {
  //     answerRef.current.focus()
  //   }
  // }, [state.answered])

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if(e.animationName === 'hideIt') {
        const countdown = document.querySelector('.countdown')
        countdown.classList.remove('go')
      }
    }

    document.addEventListener("animationend", handleAnimationEnd)
    return () => {
      document.removeEventListener('animationend', handleAnimationEnd)
    }
  }, []);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <Header />

        <Login />

        <TableSelect />

        <Quiz />

        <Result />

        <Scoreboard scoreData={scoreData} />

        <Footer />

      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export default App
