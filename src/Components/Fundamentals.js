//  shortcut to create Class component in separate file  --  rcc
//  shortcut to create functional component in separate file  --  rfc
import React, { useState } from 'react'
import reactDom from 'react-dom';
import '../App.css';

// 1. 
// Arrow function
// export const Fundamentals = () => <h1>Arraw functions</h1>

// Normal JS function - Functional Component
export function FundamentalsFunc() {
    return (
        <h1>From functional component</h1>
    )
}
// Class Component
export class FundamentalsClass extends React.Component {       //  <Welcome/>   <- To call Class Compoents
  render () {
    return (
      <div>
        <h1>From Class Component</h1>
      </div>
    )
  }
}
// export default Fundamentals;








//  2.
// Explaining PROPS using functional Component
export const ExplainProps = (props) => {
  // console.log(props);

  // Props are immutable (value cannot be changed like below)
  // props.name = "changed name";    <--- this is cannot be done with props

  return (
    <div>

      {
        // Below is called Conditional Rendering
        props.name != null ? 
          <div>
            <h3>
              Hi, I am {props.name} from { props.place }  {/*  <-----  This is called Interpolation */}
            </h3>
          </div> : 
          <div>
            { props.children }
          </div>
      }

    </div>
  )
}
// Explaining probs using Class Component
export class ExplainPropbsClass extends React.Component {
  render() {
    return(
      <div>
        <h3>
          Hi, I am {this.props.name} from { this.props.place }  {/*  <-----  This is called Interpolation */}
        </h3>
      </div>
    );
  }
}








// 3.
// Explaining STATE concept
// Functional Component
export const FuncStateComp = () => {
  const [name, setName] = useState("Boopalan")
  const [place, setPlace] = useState("Sankagiri")
  
  
  return(
    <div>
      <h2 className="heading">State Concept using FUNCTIONAL Component</h2>
      <h2>
          Name : { name } from : { place }
      </h2>
      <button onClick={() => setName("Magudeswaran")}>Change Name</button>
    </div>
  )
}

// Functional Component with object as a state
export const FuncObjState = () => {
  const [phone, setPhone] = useState({phone1 : '', phone2 : ''});


  return (
    <div>
      Use State with Object
      <input type="text" value={phone.phone1} onChange={(e) => setPhone({...phone,phone1 : e.target.value})}/>
      <br/>
      <input type="text" value={phone.phone2} onChange={(e) => setPhone({...phone, phone2 : e.target.value})}/>
      <br/>
      Phone 1 : {phone.phone1}
      <br/>
      Phone 2 : {phone.phone2}
    </div>
  )
}

// Functional Component with Array as a State
export const FuncArrState = () => {
  const [namelist, setNamelist] = useState(["Boopalan", "Magudes", "Maheswari"])
  const [name, setName] = useState("");
  return(
    <div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    <br/>
    <button onClick={() => setNamelist([...namelist, name])}>Add to Array</button>
    <br/>
    {
      namelist.map((name, index) => {
        return(
          <React.Fragment>
            {index + 1}. {name} <br/>
          </React.Fragment>
        )
      })
    }
    </div>
  )
}

// Class component
export class ClassStateComp extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "Boopalan",
      place : "Sankagiri"
    }
  }
  // Function
  changeName() {
    this.setState({
      name : "Magudeswaran"
    });  
  }
  render () {
    return (
      <div>
        <h2 className="heading">State Concept using CLASS Component</h2>
        <h2>
          Name : { this.state.name } from : { this.state.place }
        </h2>
        <button onClick={() => this.changeName()}>Change Name </button>
      </div>
    );
  }
}
