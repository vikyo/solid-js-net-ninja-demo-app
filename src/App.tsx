import { type Component } from 'solid-js';
import banner from './assets/banner.png';
import Header from './components/Header';
import { AppProps } from './interfaces';

const App: Component<AppProps> = (props) => {
    return (
        <div class="container m-auto bg">
            <Header />
            <img class="rounded-md" src={banner} alt="site banner" />
            {props.children}
        </div>
    );
};

export default App;
