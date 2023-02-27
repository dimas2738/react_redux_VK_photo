import './App.css';
import {PageContainer} from "./components/containers/PageContainer";
import {UserContainer} from "./components/containers/UserContainer";


function App() {



    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Мой топ фото</h1>
            </header>
            <UserContainer />
            <PageContainer />
        </div>
    )

}


export default App;
