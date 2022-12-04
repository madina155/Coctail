import React from 'react';

const SideBar = () => {
    return (
        <aside className="sideBar">

            <p onClick={() => changeGender('woman')} className={`sideBar__lang-item active ${gender === 'woman' ? 'active' : ''}`}>Женщина</p>
//blouse


        </aside>
    );
};

export default SideBar;

