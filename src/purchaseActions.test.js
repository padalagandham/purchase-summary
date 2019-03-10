import  * as actions from './purchaseActions';

describe('actions', () => {
    it('applyPromoCodeSuccess shoud return price object', () => {
        expect(actions.applyPromoCodeSuccess({total:'10'})).toEqual(
            {payload: {total : "10"}, type : "APPLY_PROMO"}
        );
    });


});