import {postMessage, getMessage} from '../services/messageBoard'
import { routerRedux } from 'dva/router'

export default {
    namespace: 'users',
    state: {
        data: [],
    },
    reducers: {
        save(state, { payload: { data } }) { 
            console.log('data: ', data)         
            return { ...state, data };
        }
    },
    effects: {
        *submitMess({payload={}}, {call, put}) {
            yield call(postMessage, payload.values)
            yield put({
                type: 'getMess',
            })
            // console.log('payload.values: ', payload.values)
            yield put(routerRedux.push('/index', {name: 'dkvirus', age: 20}))
        },
        
        // *getMess({payload={}}, {call, put}) {
        //     const { data } = yield call(getMessage)
        //     yield put({ 
        //         type: 'save',
        //         payload: { data },
        //     });
        // },
        *query ({ payload={} }, { call, put }) {
            console.log('payload is: ', payload);
         },
    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
              console.log('location is: ', location);
              console.log('重定向接收参数：', location.state)
              // 调用 effects 属性中的 query 方法，并将 location.state 作为参数传递 
              dispatch({
                type: 'query',
                payload: location.state,
                })
            });
        },
    }
}