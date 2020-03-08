import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() =>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField:'',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders mainpage', () => {
    expect(wrapper).toMatchSnapshot();  
})

it('filters robots correctly',()=>{
    expect(wrapper.instance().filteredRobots([])).toEqual([]);
})