import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {Counter} from './components/Counter.js';

const root = ReactDOM.createRoot(document.getElementById('counter'));
root.render(
    <div>
        <Counter/>
    </div>
)