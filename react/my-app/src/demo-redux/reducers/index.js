/**
 * Created by yanshi0429 on 2017/10/10.
 */
export default function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'INCREASE':
            return { count: count + 1 }
        default:
            return state
    }
}
