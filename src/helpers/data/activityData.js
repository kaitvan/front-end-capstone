import axios from 'axios';

const baseUrl = 'https://whirly-506f0-default-rtdb.firebaseio.com/';

const getUserActivities = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/activities.json?orderBy="uid"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const addActivity = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/activities.json`, object).then((response) => {
    axios.patch(`${baseUrl}/activities/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
  }).catch((error) => reject(error));
});

export { addActivity, getUserActivities };
