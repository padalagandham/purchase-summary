import reducer from './purchaseReducer';

describe('purchaseSummary reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({"itemDetails": {}, "pricing": {}})
      });

    it('should handle APPLY_PROMO', () => {
        expect(
        reducer([], {
            type: "APPLY_PROMO",
            payload : "10"
          })
        ).toEqual({"pricing": "10"})
    });

    it('should handle FETCH_SUCCESS', () => {
        expect(
        reducer([], {
            type: "FETCH_SUCCESS",
            payload : {
                pricing : "$10",
                itemDetails : "items 1"
            }
          })
        ).toEqual({"itemDetails": "items 1", "pricing": "$10"})
    });

    it('should handle FETCH_FAILURE', () => {
        expect(
        reducer([], {
            type: "FETCH_FAILURE",
            payload : {}
          })
        ).toEqual({"itemDetails": {}, "pricing": {}})
    });

    it('should handle FETCH_BEGIN', () => {
        expect(
        reducer([], {
            type: "FETCH_BEGIN",
            payload : {}
          })
        ).toEqual({"itemDetails": {}, "pricing": {}})
    });


});