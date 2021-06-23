import { combineReducers } from "redux";
import bagReducer from "./bagReducer";
import favoriteReducer from "./favoriteReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
    home: homeReducer,
    favorite: favoriteReducer,
    bag: bagReducer
})