/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/pages/jobStyles.module.scss";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

function JobItemList({ item }) {
  console.log(item.skills)
  return (
    <React.Fragment>
      <div class="row py-4 align-items-center">
        <div class="col-md-1">
          <img src={item?.image} alt="profile" className={style.profileImage} />
        </div>
        <div class={`col-md-8 ${style.profileContent}`}>
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
              <span class={`badge bg-warning ${style.skillBadge}`}>
                +{item?.skills?.slice(3, item?.skills?.length)?.length}
              </span>
            ) : null}
          </div>
        </div>
        <div class="col-md-2">
          <Link href={`/jobs/details/${item?.slug}`}>
            <button
              type="button"
              class={`btn btn-primary btn-lg`}
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