// 2. create Action creator methode

import { CHANGE_NAME, CHANGE_DETAILS } from './detailTypes'

export const changeName = (name) => {
    return ({
        type : CHANGE_NAME,
        data : name
    })
}

export const changeDetails = (detail) => {
    return ({
        type : CHANGE_DETAILS,
        data : detail
    })
}
