import { useSelector } from "react-redux";
import SpotCard from "./SpotCard";
import './spots.css'
import React from "react";


function AllSpots() {
    const _spots = useSelector((state) => Object.values(state.spots))

        return (
            <div className="allSpots">
            <div className="spotsContainer">
                <div className="spots-grid">
                    {_spots.map((spots) => (
                        <SpotCard key={spots.id} spots={spots} />
                    ))}
            </div>
                </div>
            </div>
        )
}


export default AllSpots
