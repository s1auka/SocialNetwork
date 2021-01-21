import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

let menuURLs = ['profile', 'dialogs', 'news', 'music', 'settings'];



const App = (props) => {
    return (
        <div className="grid-container">
            <Header />
            <Navbar urls={menuURLs} />
            <div className='content'>
                <Route path='/profile' render={() => <Profile profileState={props.state.profileInfo} addPost={props.addPost} updateNewPost={props.updateNewPost} />} />
                <Route path='/dialogs' render={() => <Dialogs dialogsState={props.state.dialogsInfo} />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />

            </div>
        </div>
    );
}


export default App;
