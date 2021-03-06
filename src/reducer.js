const initState={
    general:[{user:'Aaron',msg:'hi'},{user:'Arnold',msg:'hello'},{user:'Irvin',msg:'hey'}],
    company:[{user:'Matt',msg:'hello'},{user:'Arpit',msg:'hey'},{user:'Kevin',msg:'hi'}]
}

const reducer = (state=initState,action) => {
    const {topic,from,msg}=action;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]:[
                    ...state[topic],
                    {from, msg }
                ]
            }
        default:
            return state
    }
}

export default reducer