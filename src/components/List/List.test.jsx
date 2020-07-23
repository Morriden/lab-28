import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('should show a list', () => {
    const wrapper = shallow(
      <List lists={['test 1', 'test 2', 'test 3']}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
