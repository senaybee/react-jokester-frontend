import React from 'react';
import NavBar from './NavBar.js';
import JokeList from './JokeList.js';
import JokeForm from './JokeForm.js';
import {Switch, Route} from 'react-router-dom';

class Jokester extends React.Component {
    render(){
        if(this.props.currentUser){
            return (
                <div>
                    <NavBar match={this.props.match} onSignOut={this.props.onSignOut}/>
                    <Switch>
                        <Route path={`${this.props.match.path}`} exact render={(props) => <JokeList {...props} currentUser={this.props.currentUser}/>}/>
                        <Route path={`${this.props.match.path}/write-a-joke`} exact render={(props) => <JokeForm {...props} currentUser={this.props.currentUser}/>}/>
                        <Route path={`${this.props.match.path}/:userid`} exact render={(props) => <JokeList {...props} currentUser={this.props.currentUser}/>}/>
                    </Switch>
                </div>
            );
        } else {
            return <h1>You need to log in or sign up to view this page!</h1>
        }
    }
}

export default Jokester;