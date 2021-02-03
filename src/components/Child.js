import React, {useState} from 'react';

const Child = ({child}) => {

    let valCheckedIn = false;
    let valButtonName = "Checkin";
    let valClass = "faded";
    let valAnswer = "NO";
    
    let accessToken = "234ffdb8-0889-4be3-b096-97ab1679752c";

    if (child.checkedIn === true) {

        valCheckedIn = true;
        valButtonName = "Checkout";
        valClass = "not-faded";
        valAnswer = "YES";

    }

    const [checkedInState,setCheckedInState]=useState({
        state:
            {
                checkedIn: valCheckedIn,
                buttonName: valButtonName,
                class: valClass,
                answer: valAnswer
            }
    
    });


    const handleCheckInOut= (child)=>{

        //console.log("Handle click");
        
        if (child.checkedIn === true) {

            setCheckedInState({ 
                state:
                    {
                        checkedIn: false,
                        buttonName: "Checkin",
                        class: "faded",
                        answer: "NO"
                    }
            });
            checkOut(child);
            
        } else {

            setCheckedInState({ 
                state:
                    {
                        checkedIn: true,
                        buttonName: "Checkout",
                        class: "not-faded",
                        answer: "YES"
                    }
            });
            checkIn(child);

            }
        }

    const checkIn = (child) => {
        
        //console.log("Checkin working");

        // Pickup time could be further developed, where the user 
        // sets it in an input field what time he picks up the child
        let pickupTime = "23:59";
        
        let checkinUrl = 'https://tryfamly.co/api/v2/children/' + child.childId + '/checkins?accessToken=' + accessToken + '&pickupTime=' + pickupTime;

        fetch(checkinUrl, {
            method: 'POST',
            headers: {
                        'Content-type': 'application/json'
                    }
                })
         .then(res => res.json())
         .then((data) => {
           //console.log(data);
           alert(child.name.firstName + " is checked in");
           child.checkedIn = true;
         })
         .catch(console.log)
    }

    const checkOut = (child) => {
        
        //console.log("Checking out working");
        
        let checkinUrl = 'https://tryfamly.co/api/v2/children/' + child.childId + '/checkout?accessToken=' + accessToken;
        
        fetch(checkinUrl, {
            method: 'POST',
            headers: {
                        'Content-type': 'application/json'
                    }
                })
         .then(res => res.json())
         .then((data) => {
           //console.log(data);
           alert(child.name.firstName + " is checked out");
           child.checkedIn = false;
         })
         .catch(console.log)
    }


    return(

        <div id={child.childId} className={"card " + checkedInState.state.class}>
            <div className="card-body">
                <h3 className="card-title">{child.name.fullName}</h3>
                <p className="card-text question">Checked in?</p>
                <p className="card-text">{checkedInState.state.answer}</p>
                <button className="btnCheckIn" onClick={() => handleCheckInOut(child)}>{checkedInState.state.buttonName}</button>
            </div>
        </div>

    );


}

export default Child;