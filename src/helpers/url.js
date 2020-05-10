// Just checking which backend URL to use
export const url = (() => {
  const { host } = document.location;
  if (/localhost/.test(host)) {
    return "http://localhost:5000";
  }
  if (/staging/.test(host)) {
    return "https://opensource-staging.herokuapp.com";
  }
  return "https://api-opensource.herokuapp.com";
})();

export const homeStatsURL = `${url}/stats/home`;
export const membersPageURL = page => `${url}/members?page=${page}`;
export const contactUsURL = `${url}/contact`;
