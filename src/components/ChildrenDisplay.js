// import Child from "./Child"

import React from 'react'
import PropTypes, { number, string, boolean } from 'prop-types';
import { useState, useEffect } from 'react';

const ChildrenDisplay = ({children}) => {


    function isCheckedIn(checkedIn) {
        // console.log("isCheckedIn?");
        if (checkedIn == true) {
            return(
                <div>
                    <p className="card-text">YES</p>
                    <button>Check-out</button>
                </div>
            )
        } else {
            return(
                <div>
                    <p className="card-text">No</p>
                    <button>Check-in</button>
                </div>
            )
        }

    }

    function isFaded(checkedIn) {
        console.log("if it is faded");
        if (checkedIn !== true) {
            return("faded")
        } else {
            return("not-faded")
        }
    }

    return(
        <div className="ChildrenDisplay">
            <h1>Here are all the children</h1>

            <div className="container">

                {children.map((child) => (

                    <div className="Child col-3">
                        <div className={"card " + isFaded(child.checkedIn)}>
                            <div className="card-body">
                                <h3 className="card-title">{child.name.fullName}</h3>
                                <p className="card-text">Checked in?</p>
                                {isCheckedIn(child.checkedIn)}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
        
    
    );

}


export default ChildrenDisplay;