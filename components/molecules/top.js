import React from "react";
import style from "../../styles/pages/jobStyles.module.scss";

function Top() {

    return (
        <div className={style.top}>
            <div class="container text-start">
                <div class="row">
                    <div class={`col ${style.brand}`}>
                        Top Jobs
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;