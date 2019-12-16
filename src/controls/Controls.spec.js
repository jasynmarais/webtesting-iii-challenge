// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

describe('Controls compopnents', () => {
    test('renders close and lock buttons', () => {
        const wrapper = rtl.render(<Controls locked={false} closed={false} />)
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    });

    test('close button displays open if closed prop is true', () => {
        const wrapper = rtl.render(<Controls closed={true} />);
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
    });
    
    test('close button displays closed if closed props false', () => {
        const wrapper = rtl.render(<Controls closed={false} />);
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    });
    
    test('locked button displays locked if locked props true', () => {
        const wrapper = rtl.render(<Controls locked={true} />);
        expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
    });
    
    test('locked button displays locked if locked props false', () => {
        const wrapper = rtl.render(<Controls locked={false} />);
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    });
    
    test('closed button is disabled if gate is locked', () => {
        const wrapper = rtl.render(<Controls locked={true} closed={true} />);
        expect(wrapper.queryByText(/open gate/i)).toBeDisabled();
    });
    
    test('locked button is disabled if gate is open', () => {
        const wrapper = rtl.render(<Controls locked={false} closed={false} />);
        expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
    });
});