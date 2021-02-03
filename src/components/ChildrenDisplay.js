import Child from "./Child"
import React from 'react'


const ChildrenDisplay = ({children}) => {

    return(
        <div className="ChildrenDisplay">
            <h1>Here are all the children</h1>

            <div className="container">

                {children.map((child) => (
                    <div key={child.childId} className="Child col-12 col-sm-6 col-md-4 col-lg-3">

                        <Child child={child} />
                    
                    </div>

                ))}

            </div>
        </div>
    
    );

}

export default ChildrenDisplay;