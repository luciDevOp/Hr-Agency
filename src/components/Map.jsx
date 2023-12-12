import React from 'react';

const Map = () => {
    return (
        <div className="container-fluid map-container">
            <div className="row justify-content-center align-items-center imd-map">
                <div className="col-md-6 text-center">
                    <h1 className='h1-map'>Global Reach</h1>
                    <p className='p-map'>Over 40 offices in 25 countries.</p>
                    <img className='img-fluid imd-map-img' src='assets/img/map-purple.png' />
                </div>
            </div>
        </div>
    );
};

export default Map;