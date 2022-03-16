import React from "react";
import styles from "../styles/Sponsor.module.css";
import OptionBox from "./OptionBox";
import {Col, Container, Row} from "react-bootstrap";
import customStyle from "../styles/Sponsor.module.css";
import optionBoxStyle from "../styles/OptionBox.module.css"
import Modal from "./Modal";

const Sponsor = () => {
    return (
        <div className={styles.sponsor}>
            <div className={styles.box}>
                <div className="heading" style={{textAlign: "center"}}>DONATE</div>
                <div className={styles.button}>
                    <button className="btn mb-4 mt-2 d-grid gap-2 w-100" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsevcb" aria-expanded="false"
                            style={{
                                background: "#307354",
                                color: "white",
                                boxShadow: "none"
                            }}
                    >
                        $5 Gói ủng hộ tinh thần
                    </button>
                </div>


                <div className="collapse" id="collapsevcb">
                    <b style={{textAlign: "center"}}>Gói ủng hộ tinh thần</b> <br/>
                    <div className={styles.text}>
                        Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và không yêu cầu hoàn lại tiền nếu
                        việc gọi vống từ cộng đồng thất bại.
                    </div>
                </div>
                <p>Số người đã ủng hộ tinh thần: 500</p>
                <div className="row">
                    <div className={"col-6"}>
                        <img src={"img.png"} style={{width: "100%"}}/>

                    </div>
                    <div className={"col-6"}>
                        <a className="btn btn-primary text-nowrap" role="button"
                           aria-expanded="false" style={{backgroundColor: "#307354"}} onClick={Modal}>
                            Ủng hộ ngay
                        </a>

                    </div>
                </div>
            </div>


            <div className={styles.box}>
                <div className="heading" style={{textAlign: "center"}}>DONATE</div>
                <button className="btn btn-outline-primary mb-4 mt-2 d-grid gap-2 w-100" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsetcb" aria-expanded="false"
                        style={{
                            background: "#307354",
                            color: "white",
                            boxShadow: "none"
                        }}

                >
                    $5 Gói ủng hộ tinh thần
                </button>

                <div className="collapse" id="collapsetcb">
                    <b style={{textAlign: "center"}}>Gói ủng hộ tinh thần</b> <br/>
                    <div className="card card-body" className={styles.text}>
                        Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và không yêu cầu hoàn lại tiền nếu
                        việc gọi vống từ cộng đồng thất bại.
                    </div>
                </div>
                <p>Số người đã ủng hộ tinh thần: 500</p>
                <div className="row">
                    <div className={"col-6"}>
                        <img src={"img_1.png"} style={{width: "100%"}}/>

                    </div>
                    <div className={"col-6"}>
                        <a className="btn btn-primary text-nowrap" role="button"
                           aria-expanded="false" style={{backgroundColor: "#307354"}}>
                            Ủng hộ ngay
                        </a>

                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <div className="heading" style={{textAlign: "center"}}>DONATE</div>
                <button className="btn btn-primary mb-4 mt-2 d-grid gap-2 w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsebidv" aria-expanded="false"  style={{
                    background: "#307354",
                    color: "white",
                    boxShadow: "none"
                }}>
                    $5 Gói ủng hộ tinh thần
                </button>

                <div className="collapse" id="collapsebidv">
                    <b style={{textAlign: "center"}}>Gói ủng hộ tinh thần</b> <br/>
                    <div className="card card-body" className={styles.text}>
                        Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và không yêu cầu hoàn lại tiền nếu
                        việc gọi vống từ cộng đồng thất bại.
                    </div>
                </div>
                <p>Số người đã ủng hộ tinh thần: 500</p>
                <div className="row">
                    <div className={"col-6"}>
                        <img src={"img_2.png"} style={{width: "100%"}}/>

                    </div>
                    <div className={"col-6"}>
                        <a className="btn btn-primary text-nowrap" role="button"
                           aria-expanded="false" style={{backgroundColor: "#307354"}}>
                            Ủng hộ ngay
                        </a>

                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <div className="heading" style={{textAlign: "center"}}>DONATE</div>
                <button className="btn btn-primary mb-4 mt-2 d-grid gap-2 w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsemb" aria-expanded="false"  style={{
                    background: "#307354",
                    color: "white",
                    boxShadow: "none"
                }}>
                    $5 Gói ủng hộ tinh thần
                </button>

                <div className="collapse" id="collapsemb">
                    <b style={{textAlign: "center"}}>Gói ủng hộ tinh thần</b> <br/>
                    <div className="card card-body" className={styles.text}>
                        Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và không yêu cầu hoàn lại tiền nếu
                        việc gọi vống từ cộng đồng thất bại.
                    </div>
                </div>
                <p>Số người đã ủng hộ tinh thần: 500</p>
                <div className="row">
                    <div className={"col-6"}>
                        <img src={"img_3.png"} style={{width: "100%"}}/>

                    </div>
                    <div className={"col-6"}>
                        <a className="btn btn-primary text-nowrap" role="button"
                           aria-expanded="false"  style={{backgroundColor: "#307354"}}>
                            Ủng hộ ngay
                        </a>

                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default Sponsor;
