import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';

const App = () => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header />
                <Navbar />
                <div className='content'>
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
