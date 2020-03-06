import React from "react"
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import App from "../components/App"
import reducer from '../reducers/rootReducer'
import * as actions from '../actions/index'

configure({ adapter: new Adapter() })

const mockstore = configureMockStore([thunk])

describe('App', () => {
    it('Renders without crashing', () => {
        const store = mockstore({ title: 'Hello!' })
        const wrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>,
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('Should render startup component', () => {
        const store = mockstore({ rootState: { title: 'Hello!' } })
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        )
        expect(wrapper.find('.title').length).toEqual(1)
        expect(wrapper.find('.title').text()).toEqual('Hello!')
    })

    it('Should have a initial state', () => {
        expect(reducer(undefined, {})).toEqual({ title: 'Hello!' })
    })

    it('Should render dispatched text', () => {
        const store = mockstore(reducer)
        const expectedActions = [{ type: 'TITLE', payload: 'Hello World!' }]
        store.dispatch(actions.displayTitle('Hello World!'))
        expect(store.getActions()).toEqual(expectedActions)
    })
})
