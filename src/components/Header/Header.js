import React from 'react';

const Header = () => {
    return (
    <div className="input-group mt-5 px-5">
        <input  type="text" className="form-control" placeholder="Search"/>
        <div className="input-group-append ">
            <button style={{ backgroundColor: "#F06C4E" }} className="btn text-white" type="button">Search</button>
        </div>
    </div>
    );
};

export default Header;