import { Grid } from "@mui/material"
import React from "react"

class TeamMember {
    constructor (name, position, image, bio, prior) {
        this.name = name
        this.position = position
        this.image = image
        this.bio = bio
        this.prior = prior
    }
    
    display() {
        let priorClass = "false"
        if (this.prior) {
            priorClass = "true"
        }
        return (
            <Grid item xs={12} md={6} lg={3} xl={2} >
                <div className="team-container">
                <img className="team-thumbnail" src={this.image} alt={this.name}/>
                <h3 className="">{this.name}</h3>
                <h4>{this.position}</h4>
                <p>{this.bio}</p>
                <p className={priorClass}>Former: {this.prior}</p>

                </div>
            </Grid>
        )
    }
}

export default TeamMember