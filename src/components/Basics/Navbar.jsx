import React from 'react';

const Navbar = ({ filterItem }) => {
    return(
        <>
        {/* navbar means header */}
        <nav className="navbar">
          <div className="btn-group">
            <button className="btn-group__item"
             onClick={() => filterItem("breakfast")}>
               BreckFast
               </button>
            <button className="btn-group__item"
            onClick={() => filterItem("lunch")}>
              Lunch
              </button>
            <button className="btn-group__item"
            onClick={() => filterItem("evening")}>
              Evening
              </button>
            <button className="btn-group__item"
            onClick={() => filterItem("dinner")}>
              Dinner
              </button>
          </div>
        </nav>
        </>
    )
}

export default Navbar;