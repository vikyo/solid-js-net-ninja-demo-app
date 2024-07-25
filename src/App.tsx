import type { Component } from 'solid-js';
import banner from './assets/banner.png';
import Card from './components/Card';

const App: Component = () => {
    return (
        <div>
            <header>
                <h1>Vik Merch</h1>
            </header>
            <img src={banner} alt="banner" />
            <Card />
        </div>
    );
};

export default App;
