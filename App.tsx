import {Provider} from "react-redux"
import {store} from "./src/store"
import {stylesApp} from "./src/static/styles/style"

import {StatusBar} from 'expo-status-bar'
import {View} from 'react-native'

import Header from './src/layout/header/Header'
import Main from "./src/layout/main/Main"
import Category from "./src/components/category/Category"

const App = () => (
    <Provider store={store}>
        <View style={stylesApp.container}>
            <Header />
            <Category />
            <Main />
            <StatusBar style="auto" />
        </View>
    </Provider>
)
export default App
