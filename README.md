# react-voice-controlled 🎙️💻

A React library that enables voice controls for your React apps without the need of extra code.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Arguments](#arguments)

## Installation

`npm install react-voice-controlled`
<br/>
<br/>
or
<br/>
<br/>
`yarn add react-voice-controlled`

## Usage

1. Download this library using anyone of the above commands.

2. Import `InitializeVoiceControls` from `react-voice-controlled` in your React app.

3. Simply call `InitializeVoiceControls` in your App js to enable voice controls.

## Supportted Browsers

As this library using `speech recognition` API of javascript and this API donot support many browsers.

So, this library will also work in some browsers as given below:-

1. Chrome
2. Microsoft Edge
3. Safari
4. WebView Android
5. Chrome Android
6. Safari iOS
7. Samsung Internet

## Example and Demo

    import React from 'react';
    import {InitializeVoiceControls} from 'react-voice-controlled';

    const App = ()=> {
        <>
        <InitializeVoiceControls
            commands={{
                navigation: [
                'go to',
                'navigate to'
                ],
                scrolling: [
                'scroll by',
                'scroll to',
                'move by',
                'scroll by'
                ]
            }}
            enableNavigationControls
            enableScrollingControls
            routes={[
                '/',
                '/about',
                '/contact'
            ]}
            />
        <div className="APP">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam officia ab beatae iure ex doloremque odit, vel illo eligendi totam at, ullam asperiores vero. Minima iste ipsum atque odit sint.
        </div>
    }

    export default App;

## Arguments

**commands**:
`Object {scrolling: string[], navigation: string[]}` **_optional_** **_required according to enableNavigationCommands and enableScrollingCommands_**

An object containing the commands you want to use.

_default_: `{ navigation: ['go to', 'navigate to'], scrolling: ['scroll by', 'scroll to', 'move by', 'scroll by',"scroll down", "move down", "scroll up", "move up"] }` when enableNavigationCommands and enableScrollingCommands are `true` accordingly.

**enableNavigationControls**:
`boolean` **_optional_**

**_required with routes and navigation commands_**

A boolean value that determines whether you want to enable navigation controls.

_default_: `false`

**enableScrollingControls**:
`boolean` **_optional_**

**_required with scrolling commmands_**

A boolean value that determines whether you want to enable scrolling controls.

_default_: `false`

**routes**:
`string[]` **_optional_**

**_required with enableNavigationControls_**

An array of strings that contains the routes you want to use.

_default_: `[]`
