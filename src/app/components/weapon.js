import { useState, useRef, useEffect } from "react"
import { weapons } from "../data/weapons"
import { maneuvers } from "../data/maneuvers"
import { weaponProperties } from "../data/weapon-properties"
import { input, remove } from "../utils/ui"
import { addPoints } from "../utils/functions"
function Weapon({ characterId, id, removeWeapon }) {

    const weaponCategories = weapons.reduce((acc, weapon) => {
        if (!acc.includes(weapon.type)) {
            acc.push(weapon.type)
        }
        return acc
    }, [])
    const weaponRef = useRef(null)
    const [weapon, setWeapon] = useState({})
    const [weaponSelectCount, setWeaponSelectCount] = useState(0)

    const handleWeaponChange = () => {
        const selectedWeapon = weaponRef.current.value
        setWeapon(weapons.find(weapon => weapon.name === selectedWeapon))
        weaponRef.current.setAttribute("data-points", weapons.find(weapon => weapon.name === selectedWeapon).points)
        setWeaponSelectCount(weaponSelectCount + 1)
    }

    useEffect(() => {
        addPoints(characterId)
    }, [weaponSelectCount])

    return (
        <div id={id} className="weapon col-span-12 grid grid-cols-12 gap-2.5">
            <div className="col-span-12 relative">
                <label><b>Weapon:</b></label>
                <select className={input} ref={weaponRef} onChange={handleWeaponChange}>
                    <option value="" hidden defaultValue>Select a weapon</option>
                    {weaponCategories.map((cat, index) => {
                        return (
                            <optgroup key={index} label={cat}>
                                {weapons.filter(weapon => weapon.type === cat).map((weapon, index) => <option key={index} value={weapon.name}>{weapon.name}</option>)}
                            </optgroup>
                        )
                    })}
                </select>
                <button className={`${remove} absolute top-1/2 -translate-y-1/2 -right-10`} onClick={() => removeWeapon(id)} aria-label="Remove weapon">&times;</button>
            </div>
            <div className="col-span-2 flex justify-start gap-1">
                <p><b>Type:</b> {weapon?.type} | </p>
                <label htmlFor={`${id}-hands`}> <b>Hands: </b></label>
                <select id={`${id}-hands`} name="hands" className={`${input} !w-fit ml-1`}>
                    {weapon?.hands?.map((hand, index) => <option key={index} value={hand}>{hand}</option>)}
                </select>
            </div>
            <div className="col-span-5">
                <p><b>Properties: </b></p>
                {weapon?.properties?.map((p, index) => {
                    return (
                        <p key={index}><b><i>{p}:</i></b> {weaponProperties[p]}</p>
                    )
                })}
            </div>
            <div className="col-span-5">
                <p><b>Maneuvers: </b></p>
                {weapon?.maneuvers?.map((m, index) => {
                    return (
                        <p key={index}><b><i>{m}:</i></b>
                            <span className="block mb-1"><i>Use when: </i>{maneuvers[m].useWhen}</span>
                            <span className="block"><i>Effect: </i>{maneuvers[m].effect}</span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default Weapon
