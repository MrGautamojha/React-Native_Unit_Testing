

let INITIAL_STATE = {
  data: [],
  countryList: [],
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Add_Data":
      state = Object.assign({}, state, {
        data: action.data,
      });
      return state;

    default:
      return state;
  }
};
