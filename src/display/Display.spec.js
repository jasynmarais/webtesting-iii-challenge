// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('display component', () => {
  test('matches snapshot with props set to false', () => {
    const wrapper = rtl.render(<Display locked={false} closed={false} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  test('matches snapshot with props set to true', () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  test('displays closed if closed prop is true', () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  test('displays Locked if the locked prop is true', () => {
    const wrapper = rtl.render(<Display locked={true} />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.container).toMatchSnapshot();
  });

  test('uses red-led class if locked or closed', () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    const lockedNode = wrapper.getByText(/locked/i);
    const closedNode = wrapper.getByText(/closed/i);
    expect(lockedNode).toHaveClass('red-led');
    expect(closedNode).toHaveClass('red-led');
  });

  test('uses green-led class if unlocked or open', () => {
    const wrapper = rtl.render(<Display locked={false} closed={false} />);
    const unlockedNode = wrapper.getByText(/unlocked/i);
    const openNode = wrapper.getByText(/open/i);
    expect(unlockedNode).toHaveClass('green-led');
    expect(openNode).toHaveClass('green-led');
  });
});