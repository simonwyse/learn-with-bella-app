import { useContext } from "react";
import { AppContext, AppDispatchContext } from "../AppContext";

import {
  MdRestartAlt,
  MdFaceRetouchingNatural,
  MdScoreboard,
} from "react-icons/md";
import Button from "./Button";
import ACTIONS from "../utils/Constants";

function Footer() {
  const { view } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);

  if (view > 0) {
    return (
      <div className="flex gap-4 absolute bottom-4 left-1/2 -translate-x-1/2 w-full justify-center">
        {view >= 1 && view !== 4 && (
          <Button
            text="Scoreboard"
            css="pl-4 py-0 pr-2"
            icon={<MdScoreboard size={50} className="ml-2" />}
            handleOnClick={() => dispatch({ type: ACTIONS.SCORE_BOARD })}
          />
        )}
        {view !== 1 && (
          <Button
            text="Restart"
            css="pl-4 py-0 pr-2"
            icon={<MdRestartAlt size={50} />}
            handleOnClick={() =>
              dispatch({ type: ACTIONS.RESET, payload: { all: false } })
            }
          />
        )}
        <Button
          text="Change User"
          css="pl-4 py-1 pr-2"
          icon={<MdFaceRetouchingNatural size={40} className="ml-2" />}
          handleOnClick={() =>
            dispatch({ type: ACTIONS.RESET, payload: { all: true } })
          }
        />
      </div>
    );
  }

  return false;
}

export default Footer;
