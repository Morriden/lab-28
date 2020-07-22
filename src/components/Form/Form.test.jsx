import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('should render to input fields and one button for now.', () => {
    const wrapper = shallow(
    <Form 
        linkInput="somewebsite.com"
        bodyInput="someJSONbodyinfo"
        onLinkChange={() => {}}
        onBodyChange={() => {}}
        onSubmit={() => {}}
        handleOptionChange={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});