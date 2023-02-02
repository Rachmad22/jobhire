import React from "react";
import style from "../../styles/pages/jobStyles.module.scss"

function Footer(){

    return (
        <>
        <div className = { style.foot } >
            <div className="container">
                <div className={`col-md-4 ${style.footer}`}>
                    <img src="/images/logo.svg" alt="logo" className={style.logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <div className={style.footerLink}>
                        <p>
                            2020 Pewworld. All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;