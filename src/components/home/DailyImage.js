import React from 'react'
import pictureDay from '../../img/car-media.jpg'
import './dailyImage.css'

export const DailyImage = () => {
    return (
        <div>
            <h3>Image Of the Day</h3>
            <img src={pictureDay} alt="photoDay" className="photos"></img>
        </div>
    )
}
