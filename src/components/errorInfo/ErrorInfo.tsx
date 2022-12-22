import {Text, View} from "react-native"
import {TObj} from "../../static/types/types"

const ErrorQuery = ({status, code, description} : TObj) => {

    return (
        <View>
            <Text>{status}: {code}</Text>
            <Text>{description}</Text>
        </View>
    )
}

export default ErrorQuery
