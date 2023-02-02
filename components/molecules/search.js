import React, { useState } from "react";
import style from "../../styles/pages/jobStyles.module.scss"

function Search() {
  const [keyword, setKeyword] = useState("")


  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <input type="search" name="text" className={`input ${style.input}`} placeholder="Search for any skills ..."  onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchByKeyword();
                  }
                }}/>
        </div>
        <div className="col-md-2">
          <div className="dropdown">
            <div class="dropdown">
              <select
                className={`form-select ${style.btn}`}
                aria-label="Default select example"

              >
                <option selected disabled>
                  Sort
                </option>
                <option value="name_desc">Sortir berdasarkan nama</option>
                <option value="skills_desc">Sortir berdasarkan skill</option>
                <option value="domicile_desc">Sortir berdasarkan lokasi</option>
                <option value="release_desc">Sortir berdasarkan freelance</option>
                <option value="release_desc">Sortir berdasarkan fulltime</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className={`btn btn-primary ${style.submit}`} type="submit">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search;