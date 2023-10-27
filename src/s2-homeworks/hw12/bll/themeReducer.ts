const initState: InitialStateType = {
    themeId: 1,
}
type InitialStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChaneThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать

        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChaneThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any

type ChaneThemeIdType = { type: string, id: number }