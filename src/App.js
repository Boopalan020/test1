// import logo from './logo.svg';
import './App.css';
import React from 'react';


// 5. for React - Redux
import { Provider } from 'react-redux'
import store from './Redux/Store'

// importing the components - exported with default keyword -- use below
// import Fundamentals from './Components/Fundamentals';

// (For Arrow function ) exported without default keyword -- use below
import {
  FundamentalsClass, FundamentalsFunc, ExplainProps, ExplainPropbsClass, FuncStateComp, FuncObjState,
  FuncArrState, ClassStateComp
} from './Components/Fundamentals';

import {
  SetStateClass, Destructuring, DestructureClass, FunctionalClick, ClassClickEvent,
  ParentComponent, ListComponent
} from './Components/Fundamental';

import StylesComponent from './Components/Styles';
import { Https, FuncUseEffect } from './Components/Https';
import { Forms } from './Components/Forms'

import Routing from './Components/Routing'
import NestedRoute from './Components/NestedRoute'

import Details from './Components/Details'

function App() {
  return (
    <Provider store = {store}>     {/** 6. Provider provide store to all the components in an application */}
      <div>
        {/* Types of Components */}
        {/* <FundamentalsClass/> */}
        {/* <FundamentalsFunc/> */}

        {/* For Explaining Props */}
        {/* <ExplainProps/> */}
        {/* FUNCTIONAL COMPONENT */}

        {/* <ExplainProps> 
        <p> This has no Parameters </p>  
      </ExplainProps> */}

        {/* <ExplainProps name="Boopalan" place = "Sankagiri"/>
      <ExplainProps name="Magudeswaran" place = "Salem"/>
      <ExplainProps name="Uma Maheswari" place = "Erode"/> */}

        {/* CLASS COMPONENT */}
        {/* <ExplainPropbsClass name = "Saurabh" place = "Chennai"/>
      <ExplainPropbsClass name = "Rohan" place = "Chennai"/>
      <ExplainPropbsClass name = "Dhakshan" place = "Dhindukal"/> */}


        {/* Explaining STATE concept */}
        {/* <FuncStateComp/> */}
        {/* <FuncObjState /> */}
        {/* <FuncArrState/> */}
        {/* <ClassStateComp/> */}

        {/* Explaining SetState Hooks  */}
        {/* <SetStateClass></SetStateClass> */}

        {/* Explaining Destructuing conncept */}
        {/* <Destructuring name = "palan" place="salem"/>
      <DestructureClass name = "boopalan" place = "Sankagiri" /> */}

        {/* Event Handling */}
        {/* <FunctionalClick/>
      <ClassClickEvent/> */}

        {/* Method as Props */}
        {/* <ParentComponent/> */}

        {/* List Rendering */}
        {/* <ListComponent/> */}

        {/* For Adding Stylsheets */}
        {/* <StylesComponent/> */}


        {/* For HTTP */}
        {/* <Https/> */}
        {/* <FuncUseEffect/> */}



        {/* Form using Formik library */}
        {/* <Forms /> */}


        {/* Explaining Routing Concepts */}
        {/* <Routing /> */}
        {/* <NestedRoute /> */}


        {/* React Redux Store Explanation */}
        <Details />

      </div>
    </Provider>
  );
}



// 1 - Types of Components
// function Welcome(props) {               //  <Welcome></Welcome>  <- to call functional component
//   return <h1>Hello Boopalan</h1>     
// }


// 2 - Tepes of Components
// class Welcome extends React.Component {       //  <Welcome/>   <- To call Class Compoents
//   render () {
//     return <h1>Boopalan From Class Component</h1>
//   }
// }



export default App;
