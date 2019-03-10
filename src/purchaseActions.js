export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const APPLY_PROMO = "APPLY_PROMO";

export const fetchPurchaseSummaryBegin = () => ({
    type : FETCH_BEGIN
});

export const fetchPurchaseSummarySuccess = (data) => ({
    type : FETCH_SUCCESS,
    payload : data
});

export const fetchPurchaseSummaryError = (data) => ({
    type : FETCH_FAILURE, 
    payload : data
});

export const applyPromoCodeSuccess = (data) => ({
    type : APPLY_PROMO,
    payload : data
});


export function applyPromoCode(){
    return (dispatch, getState) => {
        let prevStore = getState();
        let orderTotal = prevStore.purchaseSummary.pricing.total;
        let store = Object.assign({}, prevStore.purchaseSummary.pricing, {
            total : orderTotal - ((orderTotal * 10) /100 )
        });

        dispatch(applyPromoCodeSuccess(store));
    };
}

export function fetchPurchaseSummary() {
    return dispatch => {
      dispatch(fetchPurchaseSummaryBegin());
      return fakePurchaseSummary()
        .then(data => {
          dispatch(fetchPurchaseSummarySuccess(data));
          return data;
        })
        .catch(error =>
          dispatch(fetchPurchaseSummaryError(error))
        );
    };
}

function fakePurchaseSummary() {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
              pricing: {
                  subtotal: 102.96,
                  savings: 3.85,
                  tax: 8.92,
                  total: 108.03,
                  zip: 85050
              },
              itemDetails: [
                  {
                      item_name: "Instant Pot LUX60 V3 6 Qt 6-in-1 Multi-Use Programmable Pressure Cooker, Slow Cooker, Rice Cooker, Saute, Steamer, and Warmer",
                      item_image: 'https://i5.walmartimages.com/asr/92f2df9a-8ffc-4fd1-9592-5536633cb3b3_1.f0075fe4d362c8d232879a5ee003106d.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
                      quantity : 1,
                      regprice : "10.00",
                      actprice : "20.00"
                  }
              ]
          }),
        1000
      );
    });
  }