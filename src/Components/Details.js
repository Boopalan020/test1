import React, { useState } from 'react'
// 7. import all necessary libraries needed
import { connect } from 'react-redux'
import { changeName, changeDetails } from '../Redux/Details/detailsAction'

function Details(props) {
    
    const [details, setDetails] = useState({...props})

    return (
        <div>
            <h1>My Details</h1>
            <input className="form-control form-control-sm" name = "user_name" type="text" value={details.name} onChange={(e) => setDetails({...details, name : e.target.value})} placeholder=".form-control-sm"></input><br />
            <input className="form-control form-control-sm" name="lastname" type="text" value={details.lastname} onChange={(e) => setDetails({...details, lastname : e.target.value})} placeholder=".form-control-sm"></input><br />
            <input className="form-control form-control-sm" name="address" type="text" value={details.address} onChange={(e) => setDetails({...details, address : e.target.value})} placeholder=".form-control-sm"></input><br />
            <input className="form-control form-control-sm" name="mobile" type="text" value={details.mobile} onChange={(e) => setDetails({...details, mobile : e.target.value})} placeholder=".form-control-sm"></input><br />
            <button className="btn btn-success" onClick={() => {
                console.log(details)
                const d_data = {
                    name : details.name,
                    lastname : details.lastname,
                    address : details.address,
                    mobile : details.mobile
                }
                props.changeDetails(d_data)

            }}>Save to Store</button>
            <br />
            <h2>States in Store</h2>
            <p> { props.name } </p>
            <p> { props.address } </p>
            <p> { props.lastname } </p>
            <p> { props.mobile } </p>
        </div>
    )
}

// 8. this takes the state from store to be available inside the components
const mapStateToProps = state => {
    return {
        name : state.name,
        lastname : state.lastname,
        address : state.address,
        mobile : state.mobile
    }
}

// 9. this triggers an action that sends state to the store
const mapDispatchToProps = dispatch => {
 return {
     changeName : (new_name) => dispatch(changeName(new_name)),
     changeDetails : (details) => dispatch(changeDetails(details))
 }
}

// 10. higher order components - provides above methods as a props to the component
export default connect(mapStateToProps, mapDispatchToProps)(Details)
