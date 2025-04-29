const hasWindow = () => {
    return typeof window !== undefined;
}

const removeClassName = (className, element = document.body) => {
    if (hasWindow) {
        element.classList.remove(className)
    }
}

const addClassName = (className, element = document.body) => {
    if (hasWindow) {
        element.classList.add(className)
    }
}

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const addPoints = (id) => {
    if (hasWindow) {
        const character = document.getElementById(id)
        const points = Array.from(character.querySelectorAll('[data-points]')).reduce((acc, curr) => {
            acc += parseInt(curr.getAttribute('data-points'), 10);
            return acc;
        }, 0);
        document.getElementById(`${id}-character-points`).innerHTML = points
    }

}

export {
    hasWindow,
    removeClassName,
    addClassName,
    randomId,
    addPoints
}
