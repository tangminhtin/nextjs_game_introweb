import React from "react";
import styles from "../styles/Sponsor.module.css";
import OptionBox from "./OptionBox";
import {Col, Container, Row} from "react-bootstrap";
import customStyle from "../styles/Sponsor.module.css";
import optionBoxStyle from "../styles/OptionBox.module.css"
const Sponsor = () => {
    return (
        <div className={styles.sponsor}>
            <div className="heading"><a href="#" class="button" className={customStyle.donate}>DONATE</a></div>
            <div className={styles.options}>
                <Container style={{marginTop: "3rem"}} className={optionBoxStyle.option}>
                    <Row>
                        <Col>
                            <div className="card flex-row flex-wrap">
                                <div className="card-header border-0">
                                    <img src="256.png" alt="sponsor 1..." className={customStyle.image}/>
                                </div>

                                <div className="card-footer w-100 text-muted" className={customStyle.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <OptionBox/>
                <OptionBox/>
                <OptionBox/>
                <OptionBox/>
                <OptionBox/>
            </div>
        </div>
    );
};

export default Sponsor;
