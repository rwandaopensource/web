import { membersPageURL } from "../../helpers/url";

export const getMembers = async dispatch => {
  let status = 0;
  dispatch({ type: "MEMBERS_PENDING" });
  fetch(membersPageURL)
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(res => {
      dispatch({ type: "MEMBERS_FINISH", payload: { ...res, status } });
    })
    .catch(() => {
      dispatch({ type: "MEMBERS_FAIL", payload: { status: 500 } });
    });
};
