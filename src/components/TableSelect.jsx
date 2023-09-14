import { useContext } from 'react'
import { AppContext, AppDispatchContext } from '../AppContext'
import ACTIONS from '../utils/Constants'

function TableSelect() {
    const { view } = useContext(AppContext)
    const dispatch = useContext(AppDispatchContext)

    if(view === 1) {
        return (
            <section className="flex flex-col items-center">
                <h1 className="mb-4">Choose your times table!</h1>
                <div className="slide-in-bounce">
                    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto text-6xl">
                    {[...Array(12)].map((x, tble) => {
                        return (
                        <button
                            key={tble}
                            onClick={() =>
                                dispatch({
                                    type: ACTIONS.SELECT_QUESTION,
                                    payload: { table: tble + 1 },
                                })
                            }
                            className="aspect-square flex items-center justify-center p-5 relative"
                        >
                            {tble + 1}
                        </button>
                        );
                    })}
                    </div>
                </div>
            </section>
        )
    }

    return false
}

export default TableSelect