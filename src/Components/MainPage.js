import React from 'react'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import Header from '../Components/Header';


class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = robots => {
       return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }
    render() {
        const {onSearchChange, robots, isPending} = this.props;

        return isPending ?
                <h1>Loading..</h1> :
                (
                <div className="tc">
                    <Header />
                    <SearchBox onSearchChange = {onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filteredRobots(robots)}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }

}

export default MainPage