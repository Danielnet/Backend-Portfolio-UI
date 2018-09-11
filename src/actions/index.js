import axios from 'axios'

const storeApiRequestData = (payload) => ({ type:'STORE_API_REQUEST_DATA', payload})

export const addSkillOrProject = (payload) => ({ type:'ADD_SKILL_OR_PROJECT', payload})





export const getApiDataAndSetState = () => (
  (dispatch, getState) => {
  setTimeout(() => {

    getData(getState()).then(x => dispatch(storeApiRequestData(x)))
  }, 1000)
  }
)



export const getData = (state) => {
  return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    });
}



