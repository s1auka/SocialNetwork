import { Route } from 'react-router-dom';
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

let menuURLs = ['profile', 'dialogs', 'news', 'music', 'users', 'settings'];



const App = () => {
    return (
        < div className="grid-container" >
            <HeaderContainer />
            <Navbar urls={menuURLs} />
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


export default App;
