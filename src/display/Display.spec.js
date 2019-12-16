// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('display component', () => {
    test('matches snapshots with props set to false', () => {
        const wrapper = rtl.render(<Display locked={false} closed={false} />);
        expect(wrapper.container).toMatchSnapshot();
    });

    test('matches snapshot with props set to true', () => {
        const wrapper = rtl.sender(<Display locked={true} closed={true} />)
        expect(wrapper.container).toMatchSnapshot();
    });

    test('matches snapshot with props set to true', () => {
        const wrapper = rtl.render(<Display locked={true} closed={true} />)
        expect(wrapper.container).toMatchSnapshot();
    });

    test('displays closed if the closed prop is true', () => {
        const wrapper = rtl.render(<Display locked={true} />)
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        expect(wrapper.container).toMatchSnapshot();
    });

    test('uses red-led class if locked', () => {
        const wrapper = rtl.render(<Display locked={true} />);
        const lockedNode = wrapper.getByText(/locked/i);
        expect(lockedNode.classList.contains('red-led')).toBe(true);
    });

    test('uses red-led class if closed', () => {
        const wrapper = rtl.render(<Display closed={true} />);
        const closedNode = wrapper.getByText(/closed/i);
        expect(closedNode.classList.contains('red-led')).toBe(true);
    });
    
    test('uses green-led class if unlocked', () => {
        const wrapper = rtl.render(<Display locked={false} />);
        const unlockedNode = wrapper.getByText(/unlocked/i);
        expect(unlockedNode.classList.contains('green-led')).toBe(true);
    });
    
    test('uses green-led class if open', () => {
        const wrapper = rtl.render(<Display closed={false} />);
        const openNode = wrapper.getByText(/open/i);
        expect(openNode.classList.contains('green-led')).toBe(true);
    });
});