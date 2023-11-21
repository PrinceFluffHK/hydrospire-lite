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
            <div className="cell small-12 medium-6 large-3 team-container" >
                <img className="team-thumbnail" src={this.image} alt={this.name}/>
                <h3 className="">{this.name}</h3>
                <h4>{this.position}</h4>
                <p>{this.bio}</p>
                <p className={priorClass}>Former: {this.prior}</p>
            </div>
        )
    }
}

export default TeamMember