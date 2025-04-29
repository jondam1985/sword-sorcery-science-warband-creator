"use client"

import { useState, useRef } from "react"
import Character from "./character"
import { warbandTraits } from "../data/warband-traits"
import { input, button } from "../utils/ui"
import { randomId } from "../utils/functions"

const Warband = () => {

    const selectTraitRef = useRef(null)

    const [selectedTrait, setSelectedTrait] = useState(null)
    const [warbandCharacters, setWarbandCharacters] = useState([])

    const handleSelectTrait = () => {
        const selectedTrait = selectTraitRef.current.value
        setSelectedTrait(selectedTrait)
    }

    const addCharacter = () => {
        setWarbandCharacters([...warbandCharacters, randomId()])
    }

    const removeCharacter = (id) => {
        setWarbandCharacters(warbandCharacters.filter(character => character !== id))
    }

    return (
        <div className="warband col-span-12 gap-2.5">
            <div className="warband-info col-span-12 grid grid-cols-12 gap-2.5 border-2 rounded-sm p-2.5 relative">
                <div className="warband-name col-span-6">
                    <h1 className="sr-only">Warband</h1>
                    <label htmlFor="warband-name"><b>Warband Name: </b></label>
                    <input type="text" name="warband-name" id="warband-name" className={input} />
                </div>
                <div className="warband-traits col-span-6">
                    <label htmlFor="warband-trait"><b>Warband Trait: </b></label>
                    <select ref={selectTraitRef} name="warband-trait" id="warband-trait" className={input} onChange={handleSelectTrait}>
                        <option value="" hidden defaultValue>Select a trait</option>
                        {Object.keys(warbandTraits).map((trait) => (
                            <option key={trait} value={trait}>{trait}</option>
                        ))}
                    </select>
                </div>
                <div className="warband-trait-info col-span-12">
                    <p className="inline"><b>Trait description: </b></p>
                    <p className="inline">{Object.entries(warbandTraits).find(([trait, description]) => trait === selectedTrait)?.[1]}</p>
                </div>
                <div className="warband-points absolute top-2.5 right-2.5">
                    <p>Warband points: <b><span className="warband-points-value">0</span></b></p>
                </div>
            </div>

            <div className="warband-characters col-span-12 grid grid-cols-12 gap-2.5 relative">
                <h2 className="text-2xl font-black my-2.5 col-span-12">TROOPS</h2>
                {warbandCharacters.map((character) => (
                    <Character key={character} id={character} removeCharacter={removeCharacter} />
                ))}
                <button onClick={addCharacter} className={`${button} absolute top-4 left-[7rem]`}>Add Character</button>
            </div>
        </div>
    )
}

export default Warband
