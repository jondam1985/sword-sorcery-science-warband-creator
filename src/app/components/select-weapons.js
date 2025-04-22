import { useRef, useState } from "react"
import { weapons } from "../data/weapons"
import { weaponProperties } from "../data/weapon-properties"
import { maneuvers } from "../data/maneuvers"

export default function SelectWeapon() {

    const [selectedWeaponData, setSelectedWeaponData] = useState({})

    const selectRef = useRef(null)

    const handleSelect = () => {
        const newWeapon = selectRef.current.value.replace(" ", "")
        setSelectedWeaponData(weapons.find(c => c.name === selectRef.current.value) || null)
        selectRef.current.setAttribute("data-selected-weapon", newWeapon)
        console.log(selectedWeaponData)
    }

    return (
        <div className="weapon">
            <div>
                <select onInput={handleSelect} ref={selectRef}>
                    <option defaultValue hidden>Select a weapon</option>
                    {weapons.map((w, i) => {
                        return <option key={i} className={w.name.replace(" ", "")} value={w.name} >{w.name}</option>
                    })}
                </select>
                <div className="points">
                    <p>Points: {selectedWeaponData?.points || ""}</p>
                </div>
                {selectedWeaponData?.hands && (
                    <div className="hands">
                        <label htmlFor="hands">Hands:</label>
                        <select id="hands" name="hands">
                            {selectedWeaponData.hands.map((h, i) => {
                                return <option key={i} defaultValue={i === 0}>{h}</option>
                            })}
                        </select>
                    </div>
                )}
                {selectedWeaponData?.properties && (
                    <div className="properties">
                        <p>{selectedWeaponData.properties.length > 0 ? "Properties" : ""}</p>
                        {selectedWeaponData.properties.map((p, i) => {
                            return (
                                <p key={i}>
                                    <span>{p}: </span><br />
                                    <span>{weaponProperties[p]}</span>
                                </p>
                            )
                        })}
                    </div>
                )}
                {selectedWeaponData?.maneuvers && (
                    <div className="maneuvers">
                        <p>{selectedWeaponData.maneuvers.length > 0 ? "Manuevers" : ""}</p>
                        {selectedWeaponData.maneuvers.map((m, i) => {
                            return (
                                <p key={i}>
                                    <span>{m}: </span><br />
                                    <span>Use when: {maneuvers[m].useWhen}</span><br />
                                    <span>Effect: {maneuvers[m].effect}</span>
                                </p>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}