import React, { useReducer, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4, v4 } from 'uuid';
import { adduser, deleteusr, updateuser,saveuser} from './Redux/reducers'
let updatecondition = false
export default function Anotherusercomponent() {
    const usrname = useRef(null)
    const usremail = useRef(null)
    const usrnickname = useRef(null)
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Username, setUsername] = useState("")
    const state = useSelector(state => state.student.todos)
    const todo = useSelector(state => state.student.todo)
    console.log(state)
    //console.log(todo)
    const dispatch = useDispatch()
    //console.log(state)
    function submithandler(e) {
        e.preventDefault()
        let obj = {
            "id": v4(),
            "name": Name,
            "username": Username,
            "email": Email
        }
        dispatch(adduser(obj))
        setEmail(" ")
        setName(" ")
        setUsername(" ")
    }
    useEffect(() => {
        setName(todo.name)
        setEmail(todo.email)
        setUsername(todo.username)
    }, [updatecondition])
    function savehandler() {
        let obj = {
            "id": v4(),
            "name": Name,
            "username": Username,
            "email": Email,
            "previousId":todo.id
        }
        dispatch(saveuser(obj))
    }
    return (
        <>
            <div className="container">
                <form onSubmit={submithandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={usremail} type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input ref={usrname} type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
                        <input ref={usrnickname} type="text" className="form-control" value={Username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    {updatecondition ? <button type="button" onClick={savehandler} className="btn btn-primary">Save</button> : <button type="submit" className="btn btn-primary">Submit</button>}
                </form>
            </div>
            <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px", justifyContent: "space-between" }}>
                {state.map((user, index) => {
                    return <Users key={index} Name={user.name} Email={user.Email} usrname={user.username} ID={user.id}></Users>
                })}
            </div>
        </>
    )
}
function Users({ usrname, Name, Email, ID }) {

    const dispatch = useDispatch()
    function deletehandler() {
        dispatch(deleteusr(ID))
    }
    function updatehandler() {
        updatecondition = !updatecondition
        dispatch(updateuser(ID))
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">{usrname}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">{Name}</h6>
                    <p className="card-text text-center">{Email}</p>
                    <button className="btn btn-danger mx-3" onClick={deletehandler}>Delete</button>
                    <button className="btn btn-info" onClick={updatehandler}>Edit</button>
                </div>
            </div>
        </>
    )
}