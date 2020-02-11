import {shallow} from 'enzyme';
import Card from './Card';
import React from 'react';

it('expect to render card component',() => {
    expect(shallow(<Card/>).debug()).toMatchSnapshot();
})
