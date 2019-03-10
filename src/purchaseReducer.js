import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    APPLY_PROMO
} from "./purchaseActions"

const initialState = {
    pricing: {},
    itemDetails: {}
}

export default function purchaseSummaryReducer(state = initialState, action) {
    switch (action.type){
            case FETCH_BEGIN: 
                return {
                    ...state,
                    pricing : {},
                    itemDetails : {}
                }
            case FETCH_SUCCESS:
                return {
                    ...state,
                    pricing : action.payload.pricing,
                    itemDetails : action.payload.itemDetails
                }
            case FETCH_FAILURE:
                return {
                    ...state,
                    pricing : {},
                    itemDetails : {} 
                }
             case APPLY_PROMO:
               return {
                   ...state,
                   pricing :action.payload,
               } 
                 
            default:
                return state;
        }
}