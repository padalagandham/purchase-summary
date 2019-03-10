import React from 'react';
import ReactDOM from 'react-dom';
import Promocode from './PromoCode';
import Adapter from 'enzyme-adapter-react-16';
 import { shallow, configure } from 'enzyme';

describe('Promo Component', () => {
    const div = document.createElement('div');
    configure({adapter: new Adapter()});
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Promocode />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('promoFormContainer should exist', () => {
        const component = shallow(<Promocode debug />);
        expect(component).toMatchSnapshot();
    });

    it('should have toggleContainer  to show and hide', () => {
        const component = shallow(<Promocode />);
        expect(component.find('.toggleContainer').length).toEqual(1)
        component.unmount();
    });

    it('click on toggleContainer to show promo code form', () => {
        const component = shallow(<Promocode />);
        component.find('.toggleContainer').simulate("click");
        expect(component.find('.promoFormContainer').length).toEqual(1)
        component.unmount();
    });

});