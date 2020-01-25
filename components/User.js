import React from "react";

const User = (props) => (
    <div>
        <p>Hi my name is {props.name}</p>
        <p>I am {props.age} old</p>
        <style jsx>{`
        div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
        }    
         p {
            color: red
            }`
        }</style>
    </div>);

export default User;
