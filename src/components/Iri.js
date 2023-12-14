import React from "react";
import bloodClot from "../assets/images/shutterstock_clogged-blood.webp";
import rescucitation from "../assets/images/shutterstock_surgery.webp";
import stent from "../assets/images/shutterstock_guide-wire.webp";
import redBrain from "../assets/images/shutterstock_red-brain.webp";
import hydrogenMolecule from "../assets/images/shutterstock_hydrogen.webp";
import recoveringStroke from "../assets/images/shutterstock_hospital-woman.webp";
import device from "../assets/images/IMG_6101.webp";
import research from "../assets/images/shutterstock_research.webp";
import { Grid } from "@mui/material";

const Iri = (props) => {
    return (
        <div>
            <div className="color-container">
                <div className="content-container">
                    <h1 className="iri-header">
                        Ischemia and Reperfusion Injury (IRI)
                    </h1>
                    <p className="p-iri">
                        Ischemia is caused by interruption of oxygen carrying
                        blood flow to any part of the body.
                    </p>
                    <p className="p-iri">
                        Ischemic events such as Stroke and Cardiac Arrest are
                        among the leading global killers. Over 900,000 strokes
                        and 800,000 cardiac arrests happen in the USA each year.
                    </p>
                    <p className="p-iri">
                        It is critical to restore blood flow within minutes to
                        limit injury to critical organs.
                    </p>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={rescucitation}
                                alt="Stock image of a man in a hospital receiving CPR"
                            />
                        </Grid>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={bloodClot} 
                                alt="CG stock image of a vein clogged by unwanted material"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="color-container-blue">
                <div className="content-container">
                    <h1 className="iri-header">
                        Reperfusion injury occurs after restoration of blood
                        flow
                    </h1>
                    <p className="p-iri">
                        IRI of the brain is thought to occur when brain cells
                        are deprived of oxygen, and enter anaerobic metabolism.
                        Toxic metabolites and reactive oxygen species such as
                        peroxides and other precursor molecules accumulate.
                    </p>
                    <p className="p-iri">
                        When blood flow or perfusion is restored and cells
                        resume aerobic metabolism, accumulated toxins overwhelm
                        the cell's normal defenses and lead to DNA damage, cell
                        wall disruption and trigger cell death / apoptosis.
                    </p>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={stent}
                                alt="https://www.shutterstock.com/image-photo/guide-wire-196685048"
                            />
                        </Grid>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={redBrain}
                                alt="https://www.shutterstock.com/image-photo/xray-mans-head-cerebral-stroke-brain-1892064544"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="color-container">
                <div className="content-container">
                    <h1>
                        Reducing Damage and Accelerating Recovery with Hydrogen
                    </h1>
                    <p className="p-iri">
                        Acute oxidative stress induced by ischemia-reperfusion
                        can cause serious damage to tissues.
                    </p>
                    {/* add link to osawa study w/ "osawa 2011" */}
                    <p className="p-iri">
                        Research has shown that hydrogen can scavenge these
                        damaging oxygen compounds, without impacting oxygen
                        compounds important to cell health.
                    </p>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={hydrogenMolecule}
                                alt="https://www.shutterstock.com/image-photo/abstract-transparent-hydrogen-h2-molecules-on-2253488127"
                            />
                        </Grid>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={recoveringStroke}
                                alt="https://www.shutterstock.com/image-photo/older-woman-recovering-hospital-bed-happy-1056956138"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="color-container-blue">
                <div className="content-container">
                    <h1>The HydroSpire Solution</h1>
                    <p className="p-iri">
                        We are developing electrolyzer-based hydrogen inhalation
                        therapy systems. We will mitigate the risk of
                        flammability by generating hydrogen from water at the
                        point of use, in the exact quantity needed by the
                        patient.
                    </p>
                    <p className="p-iri">
                        We will conduct clinical studies of hydrogen, and seek
                        approval for use in hospital and emergency medicine
                        settings with indications for stroke, cardiac arrest,
                        heart attack and other ischemic conditions.
                    </p>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={research}
                                alt="https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-medical-2149947783"
                            />
                        </Grid>
                        <Grid item xs={6} className="flex-center">
                            <img
                                className="iri-stock-image"
                                src={device}
                                alt=""
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Iri;
