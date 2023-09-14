import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { PiTrophy, PiTrophyFill } from "react-icons/pi";

function Scoreboard({ scoreData }) {
  const { view } = useContext(AppContext);

  if(view === 4) {
    return (
      <section className="flex flex-col items-center">
        <h1 className="mb-4">Your High Scores!</h1>
        <div className="slide-in-bounce">
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {scoreData.tables.map((score, a) => {
              return (
                <div
                  key={a}
                  className="aspect-square flex flex-colxrj items-center justify-center bg-purple rounded-2xl px-4"
                >
                  <div className="flex flex-col text-3xl px-4">
                    {a + 1}x
                    <span className="relative text-white">
                      {score === 0 && <PiTrophy size={100} />}
                      {score >= 1 && (
                        <PiTrophyFill
                          size={100}
                          className={
                            score === 12
                              ? "text-gold"
                              : score > 6
                              ? "text-silver"
                              : "text-bronze"
                          }
                        />
                      )}
                      <span className="absolute top-6 left-1/2 -translate-x-1/2">
                        {score}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  return false
}

export default Scoreboard;