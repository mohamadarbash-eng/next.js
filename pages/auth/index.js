import React from "react";
import Router from "next/router";
import User from "../../components/User";

const indexAuth = () => (
    <div>
        <User name="Mo" age="30"></User>
        <p>Welcome to <strong>auth</strong> index.js index.js</p>
        <button onClick={() => Router.back()}>Go to back</button>
    </div>);

export default indexAuth;
