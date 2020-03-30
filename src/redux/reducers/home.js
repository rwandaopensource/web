const initialState = {
  members: 0,
  repos: 0,
  teams: 0,
  projects: 0,
  status: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
  case 'HOMESTATS_PENDING':
    return {
      ...state,
      status: 1,
    }
  case 'HOMESTATS_FINISH':
    return {
      ...state,
      ...payload,
    }
  case 'HOMESTATS_FAIL':
    return {
      ...state,
      ...payload,
    }
  default:
    return state;
  }
}
