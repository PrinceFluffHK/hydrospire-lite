import React from "react";
import bloodClot from "../assets/images/shutterstock_clogged-blood.jpeg";
import rescucitation from "../assets/images/shutterstock_surgery.jpeg";
import stent from "../assets/images/shutterstock_guide-wire.jpeg";
import redBrain from "../assets/images/shutterstock_red-brain.jpeg";
import hydrogenMolecule from "../assets/images/shutterstock_hydrogen.jpeg";
import recoveringStroke from "../assets/images/shutterstock_hospital-woman.jpeg";
import device from "../assets/images/IMG_6101.jpg";
import research from "../assets/images/shutterstock_research.jpeg";
import { Grid } from "@mui/material";

const Iri = (props) => {
    return (
        <div className="">
            <div className="iri-panel iri-container">
                <h1 className="iri-header">
                    Ischemia and Reperfusion Injury (IRI)
                </h1>
                <p className="p-iri">
                    Ischemia is caused by interruption of oxygen carrying blood
                    flow to any part of the body.
                </p>
                <p className="p-iri">
                    Ischemic events such as Stroke and Cardiac Arrest are among
                    the leading global killers. Over 900,000 strokes and 800,000
                    cardiac arrests happen in the USA each year.
                </p>
                <p className="p-iri">
                    It is critical to restore blood flow within minutes to limit
                    injury to critical organs
                </p>
            </div>
            <div className="iri-panel-blue">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={rescucitation}
                            alt="https://www.shutterstock.com/image-photo/close-on-asian-surgical-team-performing-2115062087"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={bloodClot}
                            alt="https://www.shutterstock.com/image-photo/thickened-arteries-veins-coronary-heart-disease-2239662027"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="iri-panel iri-container">
                <h1 className="iri-header">
                    Reperfusion Injury ocurrs after restoration of blood flow
                </h1>
                <p className="p-iri">
                    IRI of the brain is thought to occur when brain cells,
                    deprived of oxygen, enter anaerobic metabolism and toxic
                    metabolites, reactive oxygen species such as peroxides and
                    other precursor molecules accumulate
                </p>
                <p className="p-iri">
                    When blood flow or perfusion is restored and cells resume
                    aerobic metabolism, accumulated toxins overwhelm the cell's
                    normal defenses and lead to DNA damage, cell wall disruption
                    and trigger cell death / apoptosis
                </p>
            </div>
            <div className="iri-panel-blue">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={stent}
                            alt="https://www.shutterstock.com/image-photo/guide-wire-196685048"
                        />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
                <div className="grid-x grid-margin-x">
                    <div className="cell small-6 center-image">
                    </div>
                    <div className="cell small-6 center-image">
                        <img
                            className="iri-stock-image"
                            src={redBrain}
                            alt="https://www.shutterstock.com/image-photo/xray-mans-head-cerebral-stroke-brain-1892064544"
                        />
                    </div>
                </div>
            </div>
            <div className="iri-panel iri-container">
                <h1>Reducing Damage and Accelerating Recovery with Hydrogen</h1>
                <p className="p-iri">
                    Acute oxidative stress induced by ischemia-reperfusion can
                    cause serious damage to tissues.
                </p>
                <p className="p-iri">
                    Research has shown that hydrogen can scavenge these damaging
                    oxygen compounds, without impacting oxygen compounds
                    important to cell health.
                </p>
            </div>
            <div className="iri-panel-blue">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={hydrogenMolecule}
                            alt="https://www.shutterstock.com/image-photo/abstract-transparent-hydrogen-h2-molecules-on-2253488127"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={recoveringStroke}
                            alt="https://www.shutterstock.com/image-photo/older-woman-recovering-hospital-bed-happy-1056956138"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="iri-panel iri-container">
                <h1>The HydroSpire Solution</h1>
                <p className="p-iri">
                    We are developing electrolyser-based hydrogen generators. We
                    will mitigate the risk of flammability by generating
                    hydrogen from water at the point of use, in the exact
                    quantity needed by the patient.
                </p>
                <p className="p-iri">
                    We will conduct clinical studies of hydrogen, and seek
                    approval for use in hospital and emergency medicine settings
                    with indications for stroke, cardiac arrest, heart attack
                    and other ischemic conditions.
                </p>
            </div>
            <div className="iri-panel-blue">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            className="iri-stock-image"
                            src={research}
                            alt="https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-medical-2149947783"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <img className="iri-stock-image" src={device} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Iri;
