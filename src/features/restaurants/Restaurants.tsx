import {Text, View, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity} from "react-native"
import RestaurantItem from "../../components/restaurantItem/RestaurantItem"
import ErrorQuery from "../../components/errorInfo/ErrorInfo"

import {useRestaurants} from "./use-restaurants"
import {IErrorUseQuery} from "../../static/types/types";

const Restaurants = () => {
    const {isLoading, isFetching, isError, error, data, navigation} = useRestaurants()

    //ERROR
    if (isError && error) {
        const {status, data: {error: {code, description}}} = error as IErrorUseQuery
        return <ErrorQuery status={status} code={code} description={description} />
    }

    //SUCCESS
    return(
        <SafeAreaView>
            {isLoading || isFetching ? <ActivityIndicator size="large" color='white'/> : (
                <FlatList
                    data={data && data.businesses}
                    renderItem={i => (
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Restaurant' as never, i.item as never)} >
                            <RestaurantItem item={i.item} index={i.index}/>
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={i => i.id}
                />
            )}
        </SafeAreaView>
    )
}
export default Restaurants
