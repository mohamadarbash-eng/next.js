import React from "react";
import fetch from 'unfetch'
import useSWR from 'swr'

const API_URL = 'https://api.github.com';
async function fetcher(path) {
    const res = await fetch(API_URL + path);
    const json = await res.json();
    return json
}

const User = (props) => {
    const { data, error } = useSWR('/repos/zeit/next.js', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return( <div>
            <p>Hi my name is {props.name}</p>
            <p>I am {props.age} old</p>
        <div>Next stars: {data.stargazers_count}</div>
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
        </div>)

}
;

export default User;
