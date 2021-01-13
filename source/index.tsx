import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/app/App'

const domNode = document.querySelector('#root')
const jsxNode = <App />

ReactDOM.render(jsxNode, domNode)
