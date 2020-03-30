import { homeStatsURL } from '../../helpers/url';

export const getHomeStats = async dispatch => {
  let status = 0;
  dispatch({ type: 'HOMESTATS_PENDING'});
  fetch(homeStatsURL).then(res => {
    status = res.status;
    return res.json();
  }).then(res => {
    dispatch({ type: 'HOMESTATS_FINISH', payload: { ...res, status }})
  }).catch(()=> {
    dispatch({ type: 'HOMESTATS_FAIL', payload: { status: 500 }});
  });
}
