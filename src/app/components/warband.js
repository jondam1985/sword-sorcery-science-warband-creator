import { useState } from "react"
import { warbandTraits } from "../data/warband-traits"
import Character from "./character"

export default function Warband() {

    const [characters, setCharacters] = useState([])
    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        const newCharacter = {
          id: counter,
        };
        setCharacters(prev => [...prev, newCharacter]);
        setCounter(prev => prev + 1);
      };
    
      const handleRemove = (idToRemove) => {
        setCharacters(prev => prev.filter(c => c.id !== idToRemove));
      };

    return (
        <div>
            <div>
                <label htmlFor="warbandName">Warband Name:</label>
                <input id="warbandName" name="warbandName"></input>
            </div>
            <div>
                <label htmlFor="warbandTrait">Warband Trait:</label>
                <select id="warbandTrait" name="warbandTrait">
                    {Object.entries(warbandTraits).map((t, i) => {
                        return <option className={`warband-trait-${t[0].replace(" ", "").toLowerCase()}`} key={i}>{t[0]}</option>
                    })}
                </select>
            </div>
            <div>
                {characters.map((chars, index) => (
                    <Character id={chars.id} key={index} onRemove={handleRemove}/>
                ))}
            </div>
            <div>
                <button onClick={handleAdd}>Add Character</button>
            </div>
        </div>
    )
}