import {Provider} from "react-redux"
import {store} from "./src/store"
import Navigation from "./src/Navigation"
import {StatusBar} from "expo-status-bar"

const App = () => (
    <Provider store={store}>
        <Navigation />
        <StatusBar style="light" />
    </Provider>
)
export default App
