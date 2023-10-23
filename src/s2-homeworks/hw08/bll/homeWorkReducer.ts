import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newArr = [...state]
            if (action.payload === 'up') {

              return newArr.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            }
            if(action.payload === 'down'){
                return newArr.sort((a,b)=> a.name < b.name ? 1 : -1 )
            }
            return state // need to fix
        }
        case 'check': {

            return state.filter(el => el.age > 17) // need to fix
        }
        default:
            return state
    }
}
