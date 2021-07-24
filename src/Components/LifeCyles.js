// 10. Lifecycle of Components

import React, { Component } from 'react'

// Lifecycle Methods of Component
/**
 *   Mounting - when component is inserted in a DOM  ----- ComponentDidMount
 *   Updating - When re-rendering due to changes in its state or props ----- ComponentDidUpdate
 *   Unmounting - when a component is removed from the DOM ----- ComponentWillUnmount
 * 
 */


export default class LifeCycles extends Component {
    // Order of Execution - construtor(), getDerivedStateFromProps(), render() and componentDidMount() 
    constructor(props){
        console.log('Construtor - 1');  // For initialising STATES
        // no HTTP call shoudl happen
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Derived Props - 2');  //Deductiong changes in States and Props
        // no HTTP call should happen
    }

    componentDidMount() {
        console.log('Component Didmount - 4')
        //HTTP call can happen that updates the STATE or PROPS.
    }

    render() {
        console.log('Render Methode - 3')
        return (
            <div>
                
            </div>
        )
    }
}
