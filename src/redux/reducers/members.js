const initialState = {
  members: [],
  status: 0,
  pending: false,
  page: 1,
  more: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case "MEMBERS_PENDING":
    return {
      ...state,
      pending: true
    };
  case "MEMBERS_FINISH":
    return {
      status: payload.status,
      members: state.members.concat(payload.members),
      page: payload.page,
      pending: false,
      more: payload.members.length !== 0,
    };
  case "MEMBERS_FAIL":
    return {
      ...state,
      ...payload,
      pending: false,
    };
  default:
    return state;
  }
};
