import { ToggleAction } from '../actions';
const toggleReducer = (state: any, action: any) => {
    switch (action.type) {
        case ToggleAction.dialog:
            return {
                dialog: action.dialog
            }
    }
}
export { toggleReducer }