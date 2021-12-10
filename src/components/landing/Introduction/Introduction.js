import React, {lazy} from 'react'
const MPButton = lazy(() => import("../../Primary Components/Button/MP_Button"))


export default function Introduction () {
    return (
        <div>
            <h1 className="headline">Prepare for your upcoming interview <br /> with a "Google" Interviewer</h1>
            <p className="light-pointers">Take mock interviews & 1-on-1 mentoring sessions with real-life interviewers from the world’s best companies</p>
            <MPButton buttonType='primary' buttonName="Explore Packages" onClick={() => alert("Test")} isDisabled = "false" size = "large" width = {"15%"} />
            <p className="light-pointers">A package for every interview preparation problem that you’ll ever face</p>
        </div>
    )
}
