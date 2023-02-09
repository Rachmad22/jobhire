import React, { useState } from "react";
import style from "../../styles/pages/jobStyles.module.scss"
import {useRouter} from "next/router";

function Search() {
  const router = useRouter()
  const [keyword, setKeyword] = useState("")
  const [sort, setSort] = useState("DESC")


  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <input type="search" name="text" className={`input ${style.input}`} placeholder="Search for any skills ..."  onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    router.push(`/jobs?keyword=${keyword}`)
                  }
                }}
              />
        </div>
        <div className="col-md-2">
          <div className="dropdown">
            <div class="dropdown">
              <select
                className={`form-select ${style.btn}`}
                aria-label="Default select example"
                onChange= {(e)=>setSort(e.target.value)}
              >
                <option selected disabled>
                  Sort
                </option>
                <option value="DESC">Newest</option>
                <option value="ASC">Oldest</option>
                {/* <option value="domicile_desc">A-Z</option>
                <option value="release_desc">Z-A</option>
                <option value="release_desc">Sortir berdasarkan fulltime</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className={`btn btn-primary ${style.submit}`} type="submit" onClick={(e) => {
                    router.push(`/jobs?keyword=${keyword}&order=${sort}`)
                  }
                }>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search;