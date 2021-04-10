import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets/Widgets';

const App = () => {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="app">
            {!user 
            ? <Login />
            : <>
                <Header />
                <div className="app__body">
                    <Sidebar />
                    <Content />
                    <Widgets />
                </div>
            </>}
        </div>
    );
}

export default App;
