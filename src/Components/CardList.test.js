import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card component', () => {
    const mockRobots = [{
        id: 1,
        name:'John Snow',
        username: 'John',
        email:'john@gmail.com'
    }]
    expect(shallow(<CardList robots={mockRobots}/>).debug()).toMatchSnapshot();
})