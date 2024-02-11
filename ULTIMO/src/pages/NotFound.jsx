import React from 'react'

import {Link,useRouteError} from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return (
    <div>
        <h1>NotFound</h1>
        <p>Page not NotFound</p>
        <p>{error.statusText||error.message}</p>
        <Link to= "/">volver al inicio</Link>
    </div>
  )
}

export default NotFound