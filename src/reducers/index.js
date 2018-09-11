import axios from 'axios'



export function rootReducer(state = [], action) {
    let clonedState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'GET_':
            return clonedState

        //this case is setup so that when real api is implemented,
        // redux store wont render a state change if get request and state is equal
        //right now it replaces store items everytime Get request is performed.
        case 'STORE_API_REQUEST_DATA':
            function fillStoreWithApiData() {
                clonedState.apidata = (action.payload)
                let data = action.payload.data.map(item => item.title).slice(0, 5)
                console.log("komp", clonedState.kompetanse)
                clonedState.kompetanse = [...data]
                data = action.payload.data.map(item => item.title).slice(8, 15)
                clonedState.kunnskap = [...data]
                return clonedState
            }
            if (!state.apidata) {
                return fillStoreWithApiData()
            }
            // Replace "Object.length" with object equality comparison when fake API(jsonplaceholder) is removed with real API.
            else if (state.apidata.data.length !== action.payload.data.length) {
                return fillStoreWithApiData()
            }
            else {
                return clonedState
            }

        case 'ADD_SKILL_OR_PROJECT':

            axios({
                method: 'post',
                url: 'http://httpbin.org/post',
                data: (action.payload)
            }).then(function (response) {
                alert(response.data.data)
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            })
            return clonedState

        default:
            return state
    }
}