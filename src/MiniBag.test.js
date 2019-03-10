// import configureMockStore from 'redux-mock-store';
// import MiniBag from './MiniBag';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';

// import React from 'react';

// describe('Minibag Component', () => {
//     configure({adapter: new Adapter()});

//     let initialState = {}; 
//     let mockStore = configureMockStore();
//     let store = mockStore({items:[]});

//     beforeEach(() => {
       
//         store = mockStore(initialState)
//     });

//     it('renders without crashing', () => {
//         const component = shallow(<MiniBag store={store} />);
//         expect(component).toMatchSnapshotTesting();
//         // const div = document.createElement('div');
//         // ReactDOM.render(<PromoCode  store={store} />, div);
//         // ReactDOM.unmountComponentAtNode(div);
//     });
// });