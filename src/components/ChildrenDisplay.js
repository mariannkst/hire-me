import Child from "./Child"


const ChildrenDisplay = () => {

    return(
        <div className="ChildrenDisplay">
            <h1>All the children</h1>

            <div className="container">

                <Child />
                <Child />
                <Child />
                <Child />
                <Child />

            </div>




        </div>
        
    
    );

}

export default ChildrenDisplay;