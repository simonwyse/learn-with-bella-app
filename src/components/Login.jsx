import { useContext, useRef } from 'react'

import ACTIONS from '../utils/Constants'
import { MdChevronRight } from "react-icons/md";
import bella from "../assets/bella-avatar.png";
import Button from "./Button";

import { AppContext, AppDispatchContext } from '../AppContext'

function Login() {
    const { view } = useContext(AppContext)
    const dispatch = useContext(AppDispatchContext)
    const userNameRef = useRef(null);

    function handleUserNameClick(ref) {
        // console.log(userNameRef.current.value)
        if (userNameRef.current.value) {
            // setUserName(userNameRef.current.value)
            // setView(1)
            dispatch({
                type: ACTIONS.NEW_USER,
                payload: { userName: userNameRef.current.value },
            });
        }
    }

    if(view === 0) {
        return (
          <section className="flex flex-col items-center">
            <div className="text-5xl strap relative">
              <svg viewBox="0 0 500 500">
                <path
                  id="curve"
                  fill="transparent"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text width="500" textAnchor="middle">
                  <textPath
                    alignmentBaseline="top"
                    xlinkHref="#curve"
                    startOffset="50%"
                  >
                    Learn with Bella!
                  </textPath>
                </text>
              </svg>
              <img src={bella.src} className="bella-lg" alt="" />
              {/* <Image src={bella} className="bella-lg" />   */}
            </div>
            <label htmlFor="name" className="text-2xl text-purple mb-2">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="text-3xl"
              ref={userNameRef}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUserNameClick();
                }
              }}
            />
            <Button
              text="Next"
              css="mt-4 pr-0 py-0 pl-4"
              handleOnClick={handleUserNameClick}
              icon={<MdChevronRight size={50} />}
            />
          </section>
        );
    }

    return false
}

export default Login