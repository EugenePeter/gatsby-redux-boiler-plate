import testTypes from './test.types'


const INITIAL_STATE = {

    step: 1,
}


const testReducer = (state = INITIAL_STATE, action) => {
    const { step } = state;
    switch(action.type){
        case testTypes.UPDATE_STEP:
            return { 
                ...state,
                step: step + action.payload
            }

        default:
            return state
    }
}

export default testReducer;

