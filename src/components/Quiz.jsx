import { useRef, useEffect } from 'react'
import { useContext } from "react";
import { AppContext, AppDispatchContext } from "../AppContext";
import ACTIONS from '../utils/Constants'
import { MdChevronRight } from "react-icons/md";
import Button from '../components/Button'

function Quiz() {
    const { view, answered, question, table } = useContext(AppContext);
    const dispatch = useContext(AppDispatchContext);    
    const answerRef = useRef(null);

    useEffect(() => {
        if (answerRef && answerRef.current) {
            answerRef.current.focus();
        }
    }, [answered]);

    if(view === 2) {
        return (
          <section className="flex justify-center">
            <div className="">
              <div style={{ display: answered === null ? "block" : "none" }}>
                <div
                  className={(answered === null ? "go" : "") + " countdown"}
                  style={{ color: "black" }}
                >
                  <span className="countdown-3">3</span>
                  <span className="countdown-2">2</span>
                  <span className="countdown-1">1</span>
                  <span className="countdown-go">Go!</span>
                </div>

                <div className="text-6xl flex items-center relative">
                  <span className="text-9xl">{question}</span>{" "}
                  <span className="text-5xl px-4">X</span>{" "}
                  <span className="text-9xl">{table}</span>{" "}
                  <span className="text-5xl px-4"> = </span>{" "}
                  <input
                    type="number"
                    ref={answerRef}
                    onKeyDown={(e) =>
                      dispatch({
                        type: ACTIONS.ANSWER_QUESTION,
                        payload: { answerRef: answerRef, key: e.which },
                      })
                    }
                    autoFocus
                    className="answer text-9xl"
                    style={{}}
                  />
                  <Button
                    text="Go!"
                    css="pl-4 py-0 pr-0 go"
                    icon={<MdChevronRight size={50} />}
                    handleOnClick={() =>
                      dispatch({
                        type: ACTIONS.ANSWER_QUESTION,
                        payload: { answerRef: answerRef },
                      })
                    }
                  />
                </div>
              </div>

              <div
                style={{ display: answered !== null ? "flex" : "none" }}
                className="flex flex-col items-center slide-in-bounce"
              >
                {answered === true && (
                  <div className="flex flex-col">
                    <h1 className="mb-4">
                      ChobbinChillin!
                      <br />
                      <span className="text-4xl">
                        You scored 1 Bella Point!
                      </span>
                    </h1>
                  </div>
                )}
                {answered === false && (
                  <div className="flex flex-col">
                    <h1 className="mb-4">Ooooh, so close!</h1>
                  </div>
                )}
                <Button
                  text="Next Question"
                  css="pl-4 py-0 pr-0"
                  icon={<MdChevronRight size={50} />}
                  // handleOnClick={selectQuestion}
                  handleOnClick={() =>
                    dispatch({
                      type: ACTIONS.SELECT_QUESTION,
                      payload: { answerRef: answerRef },
                    })
                  }
                />
              </div>
            </div>
          </section>
        );
    }

    return false
}

export default Quiz