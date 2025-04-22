const hasWindow = () => {
    return typeof window !== undefined;
}

const maxedClasses = (data) => {
    if (hasWindow) {
        data.forEach(c => {
            console.log(document.querySelectorAll(`select[data-selected-class="${c.name.replace(" ", "")}"]`).length)
            if (c.limit !== null && document.querySelectorAll(`select[data-selected-class="${c.name.replace(" ", "")}"]`).length === c.limit ) {
                document.body.classList.add(`maxed-class-${c.name.replace(" ", "")}`)
            } else {
                document.body.classList.remove(`maxed-class-${c.name.replace(" ", "")}`)
            }
        })
    }
}

export {
    hasWindow,
    maxedClasses,
}