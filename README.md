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
    `Object {scrolling: string[], navigation: string[]}` *optional* *required according to enableNavigationCommands and enableScrollingCommands*
    An object containing the commands you want to use.

    **enableNavigationControls**:
    `boolean` *optional* *required with routes and navigation commands*
    A boolean value that determines whether you want to enable navigation controls.

    **enableScrollingControls**:
    `boolean` *optional* *required with scrolling commmands*
    A boolean value that determines whether you want to enable scrolling controls.

    **routes**:
    `string[]` *optional* *required with enableNavigationControls*
    An array of strings that contains the routes you want to use.
