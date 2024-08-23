import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';

//import {jsx as _jsx} from "react/jsx-runtime.js"

import App from './App.jsx'

//JSX :- JavaScript + HTML mix

function MyApp()
{
    return(
        <div>Custom App ! | Chai</div>
    )
}

//jo bhi function he wo end of the day run hota he jisme. parse hoke iss niche ke format me bann jaata he.

// const ReactElement = { //isko execute krne ki zarurat hi nahi, object javascript me thodi na ese execute hota he.

//     type: 'a',

//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click here to visit google'
// }

//type, key, ref, props

const AnotherElement = (
    <a href="https://google.com" target='_blank'> Visit Google</a>
)

const AnotherUser = " another user"

const ReactEle = React.createElement ( 
    'a', //tag
    {href:'https://google.com', target:'_blank'}, //attributes
    'click me to visit google', //direct text
    AnotherUser //evaluated expression
)

//createroot, ek DOM(Document Object Model) like structure create krta he.
//jese browser ke paas dom hota he.
//hamare main DOM aur iske DOM ko compare krta he, aur fir unhi hi chiz ko update krta he jo UI me update hui he.
//Lekin browesr pura dom remove krta he aur pure dom ko wapas se rePiant krta he.
// ishi ko page reload bolte he.

//Virtual DOM me hum pure ke pure dom ko track kr sakte he treelike structure me.
createRoot(document.getElementById('root')).render(
  
    //ye fragment ki syntax aa kaha se rahi he?
    //har react ek bundler use krta he, jiska kaam hota he behind the scene magic krna.
    //<MyApp />

    //MyApp() //function ese bhi execute ho sakta he.

    //ReactElement
    //AnotherElement //object me convert hoga.

    ReactEle

    //<App />
  
)

