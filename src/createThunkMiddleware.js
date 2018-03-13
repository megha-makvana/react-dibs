export function createThunkMiddleware(extraArgument) {
    return function thunkFunction({ dispatch, getState }) {
        return function nextFunction(next) {
            console.info("In next function")
            console.dir(next)
            return function actionFunction(action) {
                console.info("action RETURNED")
                console.dir(action)

                if (typeof action === 'function') {
                    console.info("++++++++++++++++++++++++++++++++++++++")
                    console.info("action is function")
                    console.info("++++++++++++++++++++++++++++++++++++++")
                    return action(dispatch, getState, extraArgument);
                }

                console.info("+++++++++++++++++calling NEXT++++++++++++++")
                console.dir(next)
                return next(action);
            }
        }
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk