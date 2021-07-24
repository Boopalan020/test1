// 3. Create a reducer that updates the State for the application'


import { CHANGE_NAME, CHANGE_DETAILS } from './detailTypes'

const initialState = {
    name : "Boopalan",
    lastname : "Magudeswaran",
    mobile : "8825971005",
    address : "Oonjanurankaadu, Sankagiri"
}

// reducer that changes name alone
export const nameReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NAME : return({
            ...state,
            name : action.data
        })

        case CHANGE_DETAILS : 
            return({
                ...action.data
            })

        default : return state
    }
}
