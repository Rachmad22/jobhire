import React from "react";
import style from "../../styles/pages/profile.module.scss"

export default function Skill({ item }) {
    // console.log(JSON.stringify(item.skills[0]))
    // const string = JSON.stringify(item.skills)
    // console.log(string)
    return (
        <>

            {item?.skills?.map((_item, key) => {
                <>
                    <span key={key} className={`badge bg-warning ${style.skillBadge}`}>{_item}</span>
                </>
            })}

        </>

    )
}
