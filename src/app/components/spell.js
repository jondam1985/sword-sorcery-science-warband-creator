import { useState, useRef, useEffect } from "react"
import { spells } from "../data/spells"
import { input, remove } from "../utils/ui"
import { addPoints } from "../utils/functions"

function Spell({ characterId, id, removeSpell, increaseInteraction }) {

    const spellRef = useRef(null)
    const [spell, setSpell] = useState({})
    const [spellSelectCount, setSpellSelectCount] = useState(0)

    const handleSpellChange = () => {
        const selectedSpell = spellRef.current.value
        setSpell(spells.find(spell => spell.name === selectedSpell))
        spellRef.current.setAttribute("data-points", spells.find(spell => spell.name === selectedSpell).points)
        setSpellSelectCount(spellSelectCount + 1)
    }

    useEffect(() => {
        addPoints(characterId)
        increaseInteraction()
    }, [spellSelectCount])

    return (
        <div id={id} className="spell col-span-12 grid grid-cols-12 gap-2.5">
            <div className="col-span-10 relative">
                <label><b>Spell:</b></label>
                <select className={input} ref={spellRef} onChange={handleSpellChange}>
                    <option value="" hidden defaultValue>Select a spell</option>
                    {spells.map((spell, index) => <option key={index} value={spell.name}>{spell.name}</option>)}
                </select>
                <button className={`${remove} absolute top-1/2 -translate-y-1/2 -right-10`} onClick={() => removeSpell(id)} aria-label="Remove spell">&times;</button>
            </div>
            <div className="col-span-12">
                <p><b>Effect: </b></p>
                <p>{spell?.effect}</p>
            </div>
        </div>
    )
}

export default Spell
