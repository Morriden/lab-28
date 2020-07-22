import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Form component', () => {
  it('should render the display section', () => {
    const wrapper = shallow(
    <Display 
        responseInfo="I'm a JSON File"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});