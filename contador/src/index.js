import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {Counter} from './components/Counter.jsx';

const root = ReactDOM.createRoot(document.getElementById('counter'));
root.render(
    <div>
        <Counter/>
    </div>
)