import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | Testing</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "testing the React"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google',
    anotherElement
)
createRoot(document.getElementById('root')).render(

    reactElement

)
