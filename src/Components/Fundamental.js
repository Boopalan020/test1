import React, { Component, useState } from 'react'
import '../App.css';



// 4.
// Explaining setState Hooks 
// Class Components
export class SetStateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credit : 0
        };
    }
    addPoints() {
        // this.state.credit = this.state.credit + 1     //  <-- increaments but never updates the UI
        this.setState({
            credit : this.state.credit + 1
        }, () => {                      //  <--- using callback 
            // console.log(this.state);
        })
        // console.log(this.state);   <---- Printing or writing code after setState is not a best practise
    }
    render() {
        return (
            <div>
                <h2 className="heading">State Concept using CLASS Component</h2>
                <h2>Your Credit Point : {this.state.credit}</h2>
                <br/>
                <button onClick={() => this.addPoints()}>Add Point</button>
            </div>
        )
    }
}








// 5.
// Explaining Destructure concept
// FUNCTIONAL COMPONENT
export const Destructuring = (props) => {   //  or  ({name, place})
    const {name, place} = props;
    return (
        <div>
            <h2 className="heading">Destructuing using CLASS component</h2>
            <h4>
                Hi, I am {name} from {place}
            </h4>
        </div>
    )
}
// CLASS COMPONENT
export class DestructureClass extends React.Component{
    render() {

        const {name, place} = this.props
        return(
            <div>
                <h2 className="heading">Destructuing using FUNCTIONAL component</h2>
                <h4>
                    Hi, I am {name} from {place}
                </h4>
            </div>
        )
    }
}







// 6.
// Explaining Event Handling
// FUNCTIONAL COMPONENT
export const FunctionalClick=(props)=>{

    const [event, setEvent] = useState("not Clicked")
    function clickEvents(){
        // console.log('Click Happened')
        setEvent("Clicked");
    }
    return(
        <div>
            <h1>Event Handling ({event})</h1>
            <button onClick={clickEvents}>Function Click</button>
        </div>
    )
}
// CLASS COMPONENT
export class ClassClickEvent extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            message : "Not Clicked"
        }
    }
    clickEvent() {
        // console.log('Click is Happened');
        this.setState({
            message : "Clicked"
        });
    }
    render(){
        return(
            <div>
                <h1>Event Handling ({this.state.message})</h1>
                <button onClick={() => this.clickEvent()}>Class Click</button>
                {/* or
                    <button onClick={this.clickEvent.bind(this)}>Class Click</button>
                */}
            </div>
        )
    }
}







// 7. 
// Methods as PROPS
// Parent Component
export const ParentComponent = () => {
    const [message, setMessage] = useState("No Message from Child")
    function sayHello() {
        setMessage("Hello Message from Child")
    }
    return(
        <div>
            <h2 className="heading">Methods as PROPS</h2>
            <h3>{message}</h3>

            {/* Child Component */}
            <ChildComponent sayHello={sayHello} />
        </div>
    )
}
export const ChildComponent = (props) => {
    return(
        <div>
            <button onClick={props.sayHello}>Say Hello to Parent</button>
        </div>
    )
}







//  8.
// List Rendering
// FUNCTIONAL COMPONENT
export const ListComponent = () => {
    // const nameArray = ["Kaar Tech", "Boopalan", "Magudeswaran", "Uma Maheswari"]

    const EmpData = [
        {
            id : "900061",
            name : "Srivats",
            role : "Sales Person"
        },
        {
            id : "900062",
            name : "Saurabh",
            role : "SD Consultant"
        },
        {
            id : "900063",
            name : "Roahn",
            role : "Technical Consultant"
        },
        {
            id : "900064",
            name : "Dhakshana Moorthi",
            role : "Front End Developer"
        }
    ]
    return(
        <ol>   
        {
            EmpData.map(employee => {
                return(
                    <li key={employee.id}>    
                        <h3>{employee.id}</h3>
                        <h3>{employee.name}</h3>
                        <h3>{employee.role}</h3>
                        <hr></hr>
                    </li>
                )
            })
        }
        </ol>
    )
}






