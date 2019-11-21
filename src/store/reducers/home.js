initialState = {
}

export default function homeReducer(state=initialState, action){
    switch (action.type) {
        case 'HOME_SUCCESS': 
            return {
                ...state
            }
        default: 
            return state
    }
}