const initialState = {
  members: [],
  status: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MEMBERS_PENDING":
      return {
        ...state,
        status: 1,
      };
    case "MEMBERS_FINISH":
      return {
        ...state,
        ...payload,
      };
    case "MEMBERS_FAIL":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
