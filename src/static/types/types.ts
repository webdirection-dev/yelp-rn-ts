export type TStyles = {[hey: string]: string | number}

//RTK Query
export interface IErrorUseQuery {
    status: number;
    data: {error: {[key: string]: string}};
}

//RESTAURANTS
export interface IRestaurantItem {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    rating: number;
    price: string;
    phone: string;
    display_phone: string;
    distance: number;
}
