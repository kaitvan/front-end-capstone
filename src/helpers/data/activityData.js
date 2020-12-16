import axios from 'axios';

const baseUrl = 'https://whirly-506f0-default-rtdb.firebaseio.com/';

const getUserActivities = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/activities.json?orderBy="uid"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getExploreActivities = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/exploreActivities.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const addActivity = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/activities.json`, object).then((response) => {
    axios.patch(`${baseUrl}/activities/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
  }).catch((error) => reject(error));
});

// const addExploreActivity = (object) => new Promise((resolve, reject) => {
//   axios.post(`${baseUrl}/exploreActivities.json`, object).then((response) => {
//     axios.patch(`${baseUrl}/exploreActivities/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
//   }).catch((error) => reject(error));
// });

const updateActivity = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/activities/${object.firebaseKey}.json`, object).then(resolve).catch((error) => reject(error));
});

const deleteActivity = (firebaseKey) => axios.delete(`${baseUrl}/activities/${firebaseKey}.json`);

export {
  getUserActivities,
  addActivity,
  updateActivity,
  deleteActivity,
  getExploreActivities,
  // addExploreActivity,
};
