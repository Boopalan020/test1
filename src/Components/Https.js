// 11. HTTP Request

// React never concerned about HTTP - it is for developing rich UI
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';

// 11.1
// CLASS COMPONENT
export class Https extends Component {
    constructor(props) {
        super(props)
        this.state = {
            s_data : [],
            change : "No state changes detected"
        }
    }

    // When we need to call API while component is being rendered
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("Data loading while rendering", response.data)
            this.setState({
                ...this.state,
                s_data : response.data
            })
            
        })
        .catch(err => console.log('Error Occured in HTTP', err))
    }

    // when we need to refresh component data on detecting changes in State or Props
    componentDidUpdate(prevProps, prevState) {
        // console.log("ComponentDidMount")
        if(this.state.change !== prevState.change)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log("Data Loaded after changing state", response.data);
            this.setState({
                ...this.state,
                s_data : []
            })
        })
        .catch(err => console.log('Error Occured in HTTP', err))
    }

    // This function changes the state value
    changeState = () => {
        
        this.setState({
            ...this.state,
            change : "States are changed" 
        }, () => {
            console.log(this.state);
        })
        
    }

    render() {
        const {s_data, change} = this.state
        return (
            <div>
            <p>{change}</p>
            <button onClick={this.changeState}>Change state</button>
            {
                s_data.length ?
                <ul>
                {
                    s_data.map(single => {
                        return(
                            <li key={single.id}>{single.title}</li>
                        )
                    })
                }
                </ul>
                : null
            }
            </div>
        )
    }
}

// 11.2
// Functional Component UseEffect Hooks to achieve life cycle of Class Component
export const FuncUseEffect = () => {
    const [s_data, setS_data] = useState([])
    const [change, setChange] = useState(false)
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // console.log("Data loading while rendering", response.data)
            setS_data(response.data)
            console.log(s_data)
        })
        .catch(err => console.log('Error Occured in HTTP', err))

    }, [change])   // [] --> that renders only once as like as ComponentDidMount
    
    return (
        <div>

            <input value={name} onChange={(e) => setName(e.target.value)}></input> <br/>
            <button onClick={() => setChange(!change)}>Change state</button>
            {   
                s_data.length ?
                <ul>
                {
                    s_data.map(single => {
                        return(
                            <li key={single.id}>{single.title}</li>
                        )
                    })
                }
                </ul>
                : null
            }
        </div>
    )
}
