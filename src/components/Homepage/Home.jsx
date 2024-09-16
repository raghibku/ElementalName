import { useState } from "react"
import { detailedArr } from "../../utilities/nameToEle"


const Home = () => {

    const [elementalizedNameArr, setElementalizedNameArr] = useState([])
    const handelSubmit = (e) => {
        e.preventDefault()
        const personName = e.target.personName.value
        console.log(personName)
        const newArr = detailedArr(personName)
        setElementalizedNameArr(newArr)
        console.log(newArr)

    }
    return (
        <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">
            <div className="inner_container flex flex-col justify-center items-center gap-8">
                {/* input name */}
                <form onSubmit={handelSubmit}>
                    <label className="form-control w-full max-w-xl text-xl gap-4">
                        <div className="label mb-4">
                            <span className="label-text ">What is your name?</span>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <input name="personName" type="text" placeholder="Type here" className="px-8 py-4 input input-bordered bg-zinc-900 w-full max-w-xl" />
                            <button className="px-8 py-4 rounded-md bg-cyan-500" type="submit">Elementalize!</button>
                        </div>
                    </label>

                </form>
                {/* output */}
                <div className="flex justify-center items-center gap-2">
                    {
                        elementalizedNameArr &&
                        elementalizedNameArr.map((element) =>
                            <div
                                key={element._id}
                                className={`w-24 h-24 p-4 flex justify-center items-center ${element.name?'bg-green-600':'bg-yellow-600'}  text-white text-xl rounded-lg shadow-lg`}
                            >
                                <div className="flex flex-col justify-between items-center w-full h-full">
                                    <div className="w-full text-right text-sm p-1 opacity-80">
                                        {element.number}
                                    </div>

                                    <h1 className="text-2xl font-bold">
                                        {element?.symbol}
                                    </h1>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Home