import React from 'react';
import Link from "next/link";
import Router from 'next/router';

const indexPage = ()=> (
    <div>
        <p>Welcome to Next.js!</p>
        <p>Go to <Link href="/auth/index"><a>Auth</a></Link> index page</p>
        <button onClick={()=> Router.push('/auth')}>Go to Index Auth Page</button>
    </div>
);

export default indexPage
