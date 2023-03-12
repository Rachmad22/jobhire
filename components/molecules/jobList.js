/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/pages/jobStyles.module.scss";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

function JobItemList({ item }) {

 return (
  <React.Fragment>
   <div className="row py-4 align-items-center">
    <div className="col-md-1">
     <img src={item?.image} alt="profile" className={style.profileImage} />
    </div>
    <div className={`col-md-8 ${style.profileContent}`}>
     <h2>{item?.name}</h2>
     <p>{item?.job}</p>

     <div className="d-flex align-items-center gap-2">
      <GrLocation />
      <p>{item?.location}</p>
     </div>

     <div className="d-flex align-items-center gap-2 mt-2">
      {item?.skills?.slice(0, 3).map((_item) => (

       <span
        className={`badge bg-warning ${style.skillBadge}`}
        key={_item}
       >
        {_item}
       </span>
      ))}

      {item?.skills?.slice(3, item?.skills?.length)?.length ? (
       <span className={`badge bg-warning ${style.skillBadge}`}>
        +{item?.skills?.slice(3, item?.skills?.length)?.length}
       </span>
      ) : null}
     </div>
    </div>
    <div className="col-md-2">
     <Link href={item?.slug === "#" ? "/jobs" : `/jobs/details/${item?.slug}`}>
      <button
       type="button"
       className={`btn btn-primary btn-lg`}
       disabled={item?.slug === "#" ? true : false}
      >
       Lihat Profile
      </button>
     </Link>
    </div>
   </div>
  </React.Fragment>
 );
}

export default JobItemList;