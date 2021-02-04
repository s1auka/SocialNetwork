import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UserContainer from './components/Users/UserContainer';

let menuURLs = ['profile', 'dialogs', 'news', 'music', 'users', 'settings'];



const App = () => {
    return (
        < div className="grid-container" >
            <Header />
            <Navbar urls={menuURLs} />
            <div className='content'>
                <Route path='/profile' render={() => <Profile />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/users' render={() => <UserContainer />} />
                <Route path='/settings' component={Settings} />

            </div>
        </ div>
    );
}


export default App;
