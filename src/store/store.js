import { createStore } from 'vuex'

const store = createStore({
    state: {
        headerParams: {},
        articleParams: {}
    },
    mutations: {
        setHeaderParams (state, payload) {
            state.headerParams = payload
        },
        setArticleParams(state, payload) {
            state.articleParams = payload
        }
    }
})

export default store