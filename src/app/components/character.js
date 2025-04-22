import { useState } from "react"
import { attributes } from "../data/attributes"
import SelectClass from "./select-class"
import SelectWeapon from "./select-weapons"

export default function Character({id, onRemove}) {
    const [firepowerLimit, setFirepowerLimit] = useState("medium")
    const [mightLimit, setMightLimit] = useState("medium")

    return (
        <div id={id}>
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
                <SelectClass characterId={id} />
            </div>
            <div>
                <button onClick={() => onRemove(id)}>Remove</button>
            </div>
            <div>
                <SelectWeapon characterId={id} />
            </div>
        </div>
    )
}