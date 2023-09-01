import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';

const About: React.FunctionComponent = () => {
    const { name } = useParams<{name: string}>();
    console.log(name)

    return (
        <div>
            <h1>{`This is the parameter in the URL: ${name ? name : "No Parameter in URL"}`} </h1>
        </div>
    )
}

export default About;