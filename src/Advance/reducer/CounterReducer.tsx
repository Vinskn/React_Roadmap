import { counterType } from "../types";

// pakai spread operator biar kalau ada properti lain gak hilang dan error
function CounterReducer(state: counterType, action: string) {
    switch (action) {
        case 'add': {
            const next = state.count + 1
            return { ...state, count: next, emote: getEmote(next) }
        }

        case 'min': {
            if (state.count === 0) return state
            const next = state.count - 1
            return { ...state, count: next, emote: getEmote(next) }
        }

        default:
            return state
    }
}


function getEmote(num: number) {
    if (num % 2 === 0) return '🔥'
    if (num % 5 === 0) return '💰'
    return ''
}

export default CounterReducer