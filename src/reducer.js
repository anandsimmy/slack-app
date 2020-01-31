const initState={
    general:[{user:'Aaron',msg:'hi'},{user:'Arnold',msg:'hello'},{user:'Irvin',msg:'hey'}],
    company:[{user:'Matt',msg:'hello'},{user:'Arpit',msg:'hey'},{user:'Kevin',msg:'hi'}]
}

const reducer = (state=initState,action) => {
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [action.payload.topic]:[
                    ...state[action.payload.topic],
                    { user:action.payload.user, msg:action.payload.msg }
                ]
            }
        default:
            return state
    }
}

export default reducer