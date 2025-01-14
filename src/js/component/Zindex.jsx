import React from "react";

const Zindex = () => {
    return (
        <>
            <div className="position-relative">
                <div className="z-3 position-absolute p-1 rounded-3 bg-danger">0</div>
                <div className="z-2 position-absolute p-2 rounded-3 bg-blue">1</div>
                <div className="z-1 position-absolute p-3 rounded-3">2</div>
                <div className="z-0 position-absolute p-4 rounded-3"><span>z-0</span></div>
                <div className="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>
            </div>
        </>
    )
}

export default Zindex