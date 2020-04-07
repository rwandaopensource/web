// Just checking which backend URL to use
export const url = (() => {
  const { host } = document.location;
  if (/localhost/.test(host)) {
    return "http://localhost:5000";
  }
  if (/staging/.test(host)) {
    return "https://api-staging.opensource.org.rw";
  }
  return "https://api.opensource.org.rw";
})();

export const homeStatsURL = `${url}/stats/home`;
export const membersPageURL = `${url}/members`;
