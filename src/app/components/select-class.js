"use client"

import { useEffect, useRef, useState } from "react";
import { classes } from "../data/classes"

export default function SelectClass() {

    const [selectedClass, setSelectedClass] = useState(null)
    const [selectedClassData, setSelectedClassData] = useState({})

    const selectRef = useRef(null)

    const handleSelect = () => {
        const newClass = selectRef.current.value.replace(" ", "")
        setSelectedClassData(classes.find(c => c.name === selectRef.current.value) || null)
        selectRef.current.setAttribute("data-selected-class", newClass)
        setSelectedClass(newClass)
    }

    useEffect(() => {
        if(typeof window !== undefined) {
            classes.forEach(c => {
                console.log(document.querySelectorAll(`select[data-selected-class="${c.name.replace(" ", "")}"]`).length)
                if (c.limit !== null && document.querySelectorAll(`select[data-selected-class="${c.name.replace(" ", "")}"]`).length === c.limit ) {
                    document.body.classList.add(`maxed-class-${c.name.replace(" ", "")}`)
                } else {
                    document.body.classList.remove(`maxed-class-${c.name.replace(" ", "")}`)
                }
            })
        }
    }, [selectedClass])

    return (
        <div className="class">
            <select ref={selectRef} onInput={handleSelect}>
                <option defaultValue hidden>Select a class</option>
                {classes.map((c, index) => {
                    return (
                        <option key={index} className={c.name.replace(" ", "")} value={c.name}>{c.name}</option>
                    )
                })}
            </select>
            <div className="points"><p>{`Points: ${selectedClassData?.points || ""}`}</p></div>
            <div className="limit"><p>{`Limit: ${selectedClassData?.limit || ""}`}</p></div>
            <div className="weapons">
                <p>{`Weapon proficiency: ${selectedClassData.weapons !== undefined ? selectedClassData.weapons.join(", ") : ""}`}</p>
            </div>
            <div className="traits">
                <p>
                    Traits:
                </p>
                <ul>
                    {selectedClassData.traits !== undefined ? selectedClassData?.traits.map((t, index) => {
                        return <li key={index}>{t}</li>
                    })
                        :
                        ""}
                </ul>
            </div>
        </div >
    )
}