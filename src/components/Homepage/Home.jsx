import { useState } from "react"
import { detailedArr } from "../../utilities/nameToEle"


const Home = () => {

    const [elementalizedNameArr, setElementalizedNameArr] = useState([])
    const [takeName, settakeName] = useState(true)
    const [personality, setPersonality] = useState([])
    const handelSubmit = (e) => {
        e.preventDefault()
        const personFullName = e.target.personName.value
        const arr = personFullName.split(" ")
        const personName = arr[0]
        console.log(personName)
        const [newArr, newPersonality] = detailedArr(personName)
        setElementalizedNameArr(newArr)
        setPersonality(newPersonality)
        console.log(newPersonality)
        settakeName(false)
    }
    const handleTryAgain = () => {
        settakeName(true)
        setPersonality([])
        setElementalizedNameArr([])
    }
    return (
        <div
            className="min-h-screen  text-white flex justify-center items-center z-0 bg-gradient-to-br from-slate-700 to-slate-800">
            {/* inner container */}
            <div className="flex flex-col overflow-y-auto max-w-[776px] gap-4 md:gap-8 p-6 md:p-10 w-[90%] md:w-[70%]  justify-center items-center z-10 ">
                {/* input name */}
                {
                    takeName ?
                        <form onSubmit={handelSubmit} className="z-10 blur-none">
                            <label className="form-control w-full max-w-xl text-xl gap-4 ">
                                <div className="label mb-4">
                                    <span className="label-text ">What is your first name?</span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                                    <input name="personName" type="text" placeholder="Type here" className="px-8 py-4 input input-bordered bg-zinc-900 w-full max-w-xl" />
                                    <button className="px-8 py-4 rounded-md bg-cyan-500" type="submit">Elementalize!</button>
                                </div>
                            </label>
                        </form>
                        :
                        <button className="px-8 py-4 rounded-md bg-cyan-500" onClick={handleTryAgain}>Try Again!</button>
                }

                {/* output */}
                <div className="w-full flex justify-center items-center ">
                    <div className="flex gap-2 overflow-x-scroll">
                        {
                            elementalizedNameArr &&
                            elementalizedNameArr.map((element) =>
                                <div
                                    key={element._id}
                                    className={`w-12 md:w-24 h-16 md:h-24 p-2 md:p-4 flex justify-center items-center ${element.name ? 'bg-green-600' : 'bg-yellow-600'}  text-white text-xl rounded-lg shadow-lg`}
                                >
                                    <div className="flex flex-col justify-between items-center w-full h-full">
                                        <div className="w-full text-right text-xs md:text-sm md:p-1 opacity-80">
                                            {element.number}
                                        </div>

                                        <h1 className="text-base md:text-2xl font-bold">
                                            {element?.symbol}
                                        </h1>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
                <div className="">
                    {
                        personality.length>0 ? <div>
                            <h1 className="text-lg font-semibold text-cyan-500">Your Personality Traits by Name Elements: </h1>
                            {personality.map((item, index) => <p key={index}><span className="text-cyan-400">{item.element} - </span>  {item.person_element_smilie}</p>)}
                        </div>:<></>
                    }
                </div>

            </div>
        </div>
    )
}

export default Home