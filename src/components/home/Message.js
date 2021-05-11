import React from 'react'
import pictureDay from '../../img/checklist.jpg';
import swal from 'sweetalert';

export const Message = () => {

    const showMission = () => {
        swal({
            title: "Today Mission",
            text: "Check the status of the solar cells and if it is too dirty clean it",
            icon: "info",
            buttons: ["No","Yes"]
        }).then(answer =>{
            if(answer){
            swal({text: "Mission accepted", icon: "success"})
            }else{swal({text: "mission rejected today", icon: "warning"})}
        })
    }
    return (
        <div>
            <h1>Today's Mission</h1>
            <p  onClick={() => showMission()}><img className="photos" alt="photoMission" src={pictureDay} /></p> 
        </div>
    )
}
