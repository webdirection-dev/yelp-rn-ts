import {SafeAreaView, ActivityIndicator, View, FlatList, Image} from "react-native"
import {stylesRestaurantScreen} from "./style"
import {useGetRestaurantByIdQuery} from "../../features/restaurants/restaurantApi"

import ErrorQuery from "../../components/errorInfo/ErrorInfo"
import {IErrorUseQuery} from "../../static/types/types"

const RestaurantScreen = ({route} : any) => {
    const {container, wrapper, img} = stylesRestaurantScreen
    const {data, isSuccess, isError, error} = useGetRestaurantByIdQuery(route.params.id)


    if (isError && error) {
        const {status, data: {error: {code, description}}} = error as IErrorUseQuery
        return <ErrorQuery status={status} code={code} description={description} />
    }

    return (
        <SafeAreaView style={container}>
            {!isSuccess ? <ActivityIndicator size="large" color='white' style={{marginTop: 25}} /> : (
                <View style={wrapper}>
                    <FlatList
                        data={data.photos}
                        renderItem={i => <Image source={{uri: i.item}} style={img}/>}
                        keyExtractor={photos => photos}/>
                </View>
            )}
        </SafeAreaView>
    )
}
export default RestaurantScreen
