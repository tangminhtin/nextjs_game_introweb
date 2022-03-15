import React from "react";
import styles from "../styles/Sponsor.module.css";
import OptionBox from "./OptionBox";
import {Col, Container, Row} from "react-bootstrap";
import customStyle from "../styles/Sponsor.module.css";
import optionBoxStyle from "../styles/OptionBox.module.css"

const Sponsor = () => {
    return (
        <div className={styles.sponsor}>
            <div className="heading">DONATE</div>
            <button className="btn btn-primary mb-4" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                $5 Gói ủng hộ tinh thần
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <b>Gói ủng hộ tinh thần</b>
                    Đây là gói ủng hộ của những người thuần tuý muốn ủng hộ dự án và không yêu cầu hoàn lại tiền nếu
                    việc gọi vống từ cộng đồng thất bại.
                </div>
            </div>
            <a className="btn btn-primary mt-4" role="button"
               aria-expanded="false" aria-controls="collapseExample">
                Ủng hộ ngay: $5
            </a>
            {/*<Container style={{marginTop: "3rem"}} className={optionBoxStyle.option}>*/}

            {/*    <div className="flex-row flex-wrap">*/}
            {/*        <img src="TPB_HoaLD.png" alt="sponsor 1..." className={customStyle.image}/>*/}
            {/*        <div className="card-footer w-100 text-muted" className={customStyle.text}>*/}
            {/*            Buy me a coffee!*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</Container>*/}
            {/*<OptionBox/>*/}
            {/*<OptionBox/>*/}
            {/*<OptionBox/>*/}
            {/*<OptionBox/>*/}
            {/*<OptionBox/>*/}

        </div>
    );
};

export default Sponsor;
