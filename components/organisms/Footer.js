import React from "react";
import style from "../../styles/pages/jobStyles.module.scss"

export default function Footer(){

    return (
        <div className = { style.foot } >
            <div className="container">
                <div className={`col-md-4 ${style.footer}`}>
                    <img src="/images/logo.svg" alt="logo" className={style.logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <div className={style.footerLink}>
                    {/* <hr class="border border-light border-2 opacity-100"/> */}
                        <p>
                            2020 Pewworld. All right reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

