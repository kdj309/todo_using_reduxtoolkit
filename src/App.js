import React from 'react'
import Anotherusercomponent from './Anotherusercomponent'
import Usercomponent from './Usercomponent'
import { Provider } from "react-redux";
import store from './Redux/Store';
export default function App() {
  return (
    <Provider store={store}>
      <h2>Redux in react</h2>
      {/* <Usercomponent></Usercomponent> */}
        <Anotherusercomponent></Anotherusercomponent>
    </Provider>
  )
}

