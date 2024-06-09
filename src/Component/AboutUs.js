// import React, { useState } from 'react'
import React from 'react'

export default function AboutUs(props) {

    // const[theme, setTheme] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const[isDarkTheme, setIsDarkTheme] = useState(false);

    // const toggleTheme =()=>{
    //     setIsDarkTheme(prevTheme=>!prevTheme);
    //     if(!isDarkTheme){
    //         setTheme({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //     }
    //     else{
    //         setTheme({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //     }
    // }

  return (
    <div className='component' >
        <div className="accordion"  id="accordionExample" >
            <div className="accordion-item" style={{color: props.mode==="dark"?"black":"white"}}>
                <h2 className="accordion-header" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}}>
                <button className="accordion-button" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                <div className="accordion-body" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color: props.mode==="dark"?"black":"white"}}>
                <h2 className="accordion-header" style={{color: props.mode==="dark"?"black":"white"}}>
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{color: props.mode==="dark"?"black":"white"}}>
                <h2 className="accordion-header" style={{color: props.mode==="dark"?"black":"white"}}>
                <button className="accordion-button collapsed" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}}>
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div className='component my-3'>
            <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Theam</label>
                <input className="form-check-input" type="checkbox" onChange={toggleTheme} role="switch" id="flexSwitchCheckDefault"/>
            </div>
        </div> */}
    </div>
  )
}
