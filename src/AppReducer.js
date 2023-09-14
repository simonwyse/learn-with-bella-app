import ACTIONS from './utils/Constants'
import { getInitialState } from "./utils/Functions";

export default function AppReducer(state, action) {

  // console.log('Reducer', state)
  switch (action.type) {
    case ACTIONS.NEW_USER:
      // console.log('new state is: ', {...state, user: action.payload.user})
      return { 
        ...state, 
        view: 1, 
        userName: action.payload.userName 
      };

    case ACTIONS.SELECT_QUESTION: {
      if (action.payload && action.payload.answerRef) {
        action.payload.answerRef.current.value = "";
        action.payload.answerRef.current.focus();
      }

      const idx = Math.floor(Math.random() * state.questionsToAsk.length);
      const newQuestion = state.questionsToAsk[idx];
      const newQuestions = state.questionsToAsk.filter((item, i) => i !== idx);

      return {
        ...state,
        table: action.payload?.table ? action.payload.table : state.table,
        view: state.questionsToAsk.length === 0 ? 3 : 2,
        question: newQuestion,
        questionsToAsk: newQuestions,
        answered: null,
      };
    }

    case ACTIONS.ANSWER_QUESTION: {
      console.log("ANSWER_QUESTION");
      // if (isNaN(parseInt(answerRef.current.value))) {
      //   answerRef.current.focus();
      //   return;
      // }
      if (action.payload.key && action.payload.key !== 13) {
        return state;
      }

      if (isNaN(parseInt(action.payload.answerRef.current.value))) {
        // answerRef.current.focus(); //?
        return state;
      }

      // if (parseInt(answerRef.current.value) === question * table) {
      //   setScore((score) => score + 1);
      //   setAnswered(true);
      // } else {
      //   setAnswered(false);
      //   answerRef.current.focus();
      // }
      const isCorrect =
        parseInt(action.payload.answerRef.current.value) ===
        state.question * state.table;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        answered: isCorrect ? true : false,
      };

      // if (parseInt(action.payload.answer) === state.question * state.table) {
      //   setScore((score) => score + 1);
      //   setAnswered(true);
      // } else {
      //   setAnswered(false);
      //   answerRef.current.focus();
      // }

      // return state;
    }

    case ACTIONS.SCORE_BOARD: {
      return {
        ...state,
        view: 4,
      };
    }

    case ACTIONS.RESET: {
      // setQuestionsToAsk(createInitialQuestions());
      // setScore(0);
      // setView(1);
      const resetAll = action.payload.all;
    console.log("Resetting...", state)
    //   return {
    //     ...state,
    //     view: resetAll ? 0 : 1,
    //     score: 0,
    //     userName: resetAll ? null : state.userName,
    //     answered: resetAll ? null : state.answered,
    //     questionsToAsk: createInitialQuestions(),
    //   };

    if(resetAll) {
        return {
            ...getInitialState(),
        }
    }
    
    return {
        ...getInitialState(),
        view: 1,
        userName: state.userName
      }
    }

    // case ACTIONS.RESET_ALL: {
    //   // setQuestionsToAsk(createInitialQuestions());
    //   // setScore(0);
    //   // setUserName(null);
    //   // setAnswered(null);
    //   // setView(0);
    //   console.log(action.payload.all)
    //   return {
    //     ...state,
    //     view: 0,
    //     score: 0,
    //     userName: null,
    //     answered: null,
    //     questionsToAsk: createInitialQuestions()
    //   };
    // }

    default:
      return state;
  }
}