const ASYNC_ACTION_START = "ASYNC ACTION START";
const ASYNC_ACTION_FINISH = "ASYNC ACTION FINISH";
const ASYNC_ACTION_ERROR = "ASYNC ACTION ERROR";
export const APP_LOADED = "APP_LOADED";

export function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START,
  };
}

export function asyncActionFinish() {
  return {
    type: ASYNC_ACTION_FINISH,
  };
}
export function asyncActionError(error) {
  return {
    type: ASYNC_ACTION_ERROR,
    payload: error,
  };
}

const initialState = { loading: false, error: null };

export default function asyncReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case APP_LOADED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}
