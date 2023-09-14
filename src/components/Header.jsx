import { useContext } from 'react'
import { AppContext } from '../AppContext'
import bella from "../assets/bella-avatar.png";
import {
  MdFace,
} from "react-icons/md";

function Header() {
  const { view, userName, answered, score } = useContext(AppContext);
  
  if(view > 0) {
    return (
      <div
        style={{
          boxShadow: "0px 0px 10px 1px var(--purple)",
        }}
        className=" fixed top-0 left-0 p-4 w-full text-5xl bg-orange"
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex">
            <MdFace size={50} className="user mr-3" /> {userName}
          </div>
          
          {view !== 4 && (
            <div className="flex gap-5 flex-shrink-00x items-center relative">
              Score
              <img
                src={bella.src}
                className={"bella " + (answered === true ? "active" : "")}
                alt=""
              />
              <span className="text-4xl points absolute -bottom-1 -right-2 text-white">
                {score}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return false
}

export default Header