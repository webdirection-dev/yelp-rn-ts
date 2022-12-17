import { StatusBar} from 'expo-status-bar'
import {View, FlatList} from 'react-native'
import {stylesApp} from "./src/static/styles/style"

import Header from './src/layout/header/Header'
import Main from "./src/layout/main/Main"
import Category from "./src/components/category/Category"

const App = () => (
    <View style={stylesApp.container}>
        <Header />
        <Category />
        <Main />
        <StatusBar style="auto" />
    </View>
)
export default App
