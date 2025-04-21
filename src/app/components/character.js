import { useState } from "react"
import { attributes } from "../data/attributes"
import SelectClass from "./select-class"

export default function Character({id, onRemove}) {
    const [firepowerLimit, setFirepowerLimit] = useState("medium")
    const [mightLimit, setMightLimit] = useState("medium")

    return (
        <div>
            {attributes.map((a, index) => {
                return (
                    <div key={index}>
                        <label htmlFor={a.name}>{a.name}</label>
                        <select id={a.name} name={a.name}>
                            {a.levels.map((l, i) => {
                                return (
                                    <option key={i} className={`level-${a.levelsName[i]}`} value={a.cost[i]} defaultValue={i === 0}>{l}</option>
                                )
                            })}
                        </select>
                    </div>
                )
            })}
            <div>
                <SelectClass />
            </div>
            <div>
                <button onClick={() => onRemove(id)}>Remove</button>
            </div>
        </div>
    )
}