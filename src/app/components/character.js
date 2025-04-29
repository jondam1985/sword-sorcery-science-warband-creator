"use client"
import { useState, useRef, useEffect } from "react"
import Weapon from "./weapon"
import Spell from "./spell"
import { classes } from "../data/classes"
import { attributes } from "../data/attributes"
import { randomId } from "../utils/functions"
import { input, remove, button } from "../utils/ui"
import { addPoints } from "../utils/functions"
const Character = ({ id, removeCharacter }) => {

    const classRef = useRef(null)
    const secondaryClassRef = useRef(null)
    const [selectedClass, setSelectedClass] = useState({})
    const [leader, setLeader] = useState(false)
    const [secondaryClass, setSecondaryClass] = useState(null)
    const [classSelectCount, setClassSelectCount] = useState(0)
    const [secondaryClassSelectCount, setSecondaryClassSelectCount] = useState(0)
    const [attributesCount, setAttributesCount] = useState(0)
    const [weapons, setWeapons] = useState([])
    const [spells, setSpells] = useState([])
    const handleClassChange = () => {
        const characterClass = classRef.current.value
        setSelectedClass(classes.find(c => c.name === characterClass))
        classRef.current.setAttribute("data-points", classes.find(c => c.name === characterClass).points)
        setClassSelectCount(classSelectCount + 1)
    }
    const handleSecondaryClassChange = () => {
        const secondaryClass = secondaryClassRef.current.value
        setSecondaryClass(classes.find(c => c.name === secondaryClass))
        secondaryClassRef.current.setAttribute("data-points", classes.find(c => c.name === secondaryClass).points)
        setSecondaryClassSelectCount(secondaryClassSelectCount + 1)
    }
    const handleLeaderChange = () => {
        setLeader(!leader)
    }

    const handleAttributeChange = (e) => {
        e.target.setAttribute("data-points", e.target.value)
        setAttributesCount(attributesCount + 1)
    }

    const addWeapon = () => {
        setWeapons([...weapons, randomId()])
    }

    const addSpell = () => {
        setSpells([...spells, randomId()])
    }

    const removeWeapon = (id) => {
        setWeapons(weapons.filter(weapon => weapon !== id))
    }

    const removeSpell = (id) => {
        setSpells(spells.filter(spell => spell !== id))
    }

    useEffect(() => {
        addPoints(id)
    }, [classSelectCount, secondaryClassSelectCount, weapons.length, spells.length, attributesCount])

    return (
        <div id={id} className="character relative border-2 rounded-sm col-span-12 grid grid-cols-12 gap-2.5 p-2.5">
            <div className="col-span-12 lg:col-span-3">
                <label><b>Name:</b></label>
                <input type="text" className={input} />
            </div>
            <div className="col-span-12 lg:col-span-3">
                <label><b>Class:</b></label>
                <select ref={classRef} className={input} onChange={handleClassChange}>
                    <option value="" hidden defaultValue>Select a class</option>
                    {classes.map(({ name }) => <option key={name} value={name}>{name}</option>)}
                </select>
            </div>
            <div tabIndex={leader ? 0 : -1} aria-hidden={!leader} className={`col-span-12 lg:col-span-3 ${leader ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <label><b>Secondary class:</b></label>
                <select ref={secondaryClassRef} className={input} onChange={handleSecondaryClassChange}>
                    <option value="" hidden defaultValue>Select a class</option>
                    {classes.map(({ name }) => <option key={name} value={name}>{name}</option>)}
                </select>
            </div>
            <div className="col-span-12">
                <p className="inline"><b>Limit:</b> {selectedClass?.limit || "N/A"} | </p>
                <p className="inline"><b>Weapons:</b> {selectedClass?.weapons?.join(", ") || ""} | </p>
                <p className="inline"><b>Class traits:</b></p>
                <ul className="list-disc pl-4 inline-block align-top">
                    {selectedClass?.traits?.map((trait, index) => <li key={index}>{trait}</li>)}
                </ul>
            </div>
            <div className="col-span-12">
                <p className="inline"><b>Limit:</b> {secondaryClass?.limit || "N/A"} | </p>
                <p className="inline"><b>Weapons:</b> {secondaryClass?.weapons?.join(", ") || ""} | </p>
                <p className="inline"><b>Class traits:</b></p>
                <ul className="list-disc pl-4 inline-block align-top">
                    {secondaryClass?.traits?.map((trait, index) => <li key={index}>{trait}</li>)}
                </ul>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-2.5">
                {attributes.map((attribute, index) => {
                    return (
                        <div key={index} className="col-span-2">
                            <label><b>{attribute.name}:</b></label>
                            <select className={input} onChange={handleAttributeChange}>
                                <option value="" hidden defaultValue>Select attr</option>
                                {attribute.levels.map((level, index) => <option key={index} value={attribute.cost[index]}>{level}</option>)}
                            </select>
                        </div>
                    )
                })}
            </div>
            <div className="weapons-and-spells col-span-12 relative my-2.5">
                <h3 className="text-xl font-black mb-2.5">Weapons & Spells</h3>
                <div className="flex justify-start items-center gap-4 mb-2.5">
                    <button className={button} onClick={addWeapon}>Add weapon</button>
                    <button className={button} onClick={addSpell}>Add spell</button>
                </div>
                <div className="weapons mb-2.5">
                    <h4 className="text-xl font-bold">Weapons</h4>
                    {weapons.map((weapon) => <Weapon key={weapon} id={weapon} characterId={id} removeWeapon={removeWeapon} />)}
                </div>
                <hr />
                <div className="spells mt-2.5">
                    <h4 className="text-xl font-bold">Spells</h4>
                    {spells.map((spell) => <Spell key={spell} id={spell} characterId={id} removeSpell={removeSpell} />)}
                </div>
            </div>

            <div className="absolute top-2.5 right-2.5 flex items-center">
                <p className="character-points mr-4">Character points: <b id={`${id}-character-points`}>0</b></p>
                <label htmlFor="leader"><b>Leader</b></label>
                <input id="leader" name="leader" type="checkbox" className="ml-1 inline-block mr-4" onChange={handleLeaderChange} />
                <button aria-label="Remove character" onClick={() => removeCharacter(id)} className={`${remove}`}>&times;</button>
            </div>
        </div>
    )
}

export default Character
