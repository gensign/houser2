const initialState = {
    property_name: '',
    the_address: '',
    city: '',
    the_state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}
export const STEP_ONE = 'STEP_ONE'
export const STEP_TWO = 'STEP_TWO'
export const STEP_THREE = 'STEP_THREE'

function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return { ...state, ...action.payload }
        case STEP_TWO:
            return { ...state, ...action.payload }
        case STEP_THREE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default reducer
