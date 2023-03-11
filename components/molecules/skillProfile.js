import React from "react";
import style from "../../styles/pages/profile.module.scss"

export default function Skill({ item }) {

    return (
        <>

            {item?.skills?.map((_item, key) => {
                return (
                <React.Fragment key={key} >
                    <span className={`badge bg-warning ${style.skillBadge}`}>{_item}</span>
                </React.Fragment>
            )})}

        </>

    )
}
