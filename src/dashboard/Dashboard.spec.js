// Test away
//1 bring all deps
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dash from './Dashboard';


//2 set up cleanup
afterEach(rtl.cleanup);

//3 set up boring operations in before each (wrapper
let wrapper;
let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
}
let Open = () =>{
    return wrapper.queryByText('Open');
}
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}
//the other two

beforeEach(() => {
    wrapper = rtl.render(<Dash />)
});

//make a trivial test
it('renders without crashing', () => {
    // expect to match snapshot!
    expect(wrapper.container).toMatchSnapshot();
})

it('renders a Unlocked text node', () => {
  //  expect(wrapper.queryByText('Unlocked')).toBeInTheDocument();
   // expect(wrapper.queryByText('Unlocked')).toBeVisible();
})

describe('Dashboard Component when we close the gate', () => {
    //programmatically click on the close button
    // and retest everything
    it('matches snapshot after closing the gate', () => {
        rtl.fireEvent.click(CloseGate())
        expect(wrapper.container).toMatchSnapshot();
    })
    it('clicking close makes close button disappear', () => {
        expect(CloseGate()).toBeVisible();
        rtl.fireEvent.click(CloseGate())
        expect(CloseGate()).toBe(null);
    })
})