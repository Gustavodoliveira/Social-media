const initialState = {
  isLoggedin: false,
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case 'register': {
      const newState = { ...state };
      newState.isLoggedin = !newState.isLoggedin;
      console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
