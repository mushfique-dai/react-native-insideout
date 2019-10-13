import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

// SCREENS
import Screen from './screens/splashscreen/Splashscreen'

// Redux Reducer
import AppReducer from './state/reducers'

const enhancer = compose(
  applyMiddleware(thunk)
)

const store = createStore(AppReducer, enhancer)
persistStore(store, () => {})

const AppNavigator = createStackNavigator(
  {
    Screen: Screen
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class Setup extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
