import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeUser } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeUser();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            < div className="grid-container" >
                <HeaderContainer />
                <Navbar />
                <div className='content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/auth/login' component={Login} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/settings' component={Settings} />

                </div>
            </ div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeUser }))
    (App);
