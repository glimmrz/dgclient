import React, { useState } from 'react';

const Step6 = ({ onNext, onPrevious, previousData }) => {
    const [selectedNeeds, setSelectedNeeds] = useState([]);

    const needs = [
        { label: 'Hosting', value: 'hosting', imgSrc: 'default.png' },
        { label: 'Company Logo', value: 'company_logo', imgSrc: 'default_1.png' },
        { label: 'Newsletter', value: 'newsletter', imgSrc: 'default_2.png' },
        { label: 'Mobile App', value: 'mobile_app', imgSrc: 'default_3.png' },
        { label: 'Photo & Video Production', value: 'photo_video_production', imgSrc: 'default_4.png' },
        { label: 'Online Marketing (SEO, Ads)', value: 'online_marketing', imgSrc: 'default_5.png' },
        { label: 'Print Material', value: 'print_material', imgSrc: 'default_6.png' }
    ];

    const handleCheckboxChange = (need) => {
        setSelectedNeeds((prevSelectedNeeds) => {
            if (prevSelectedNeeds.includes(need)) {
                return prevSelectedNeeds.filter(item => item !== need);
            } else {
                return [...prevSelectedNeeds, need];
            }
        });
    };

    const handleNext = () => {
      
        const currentData = { additionalNeeds: selectedNeeds };
        const updatedData = { ...previousData, ...currentData };

        console.log('Step6 data:', updatedData); // Log current step data with previous data

        onNext(updatedData);
    };

    return (
        <div className="form-step6">
            <p>
                <span className="step-number">6 →</span> Additional needs (Optional):
            </p>
            <p className="subtext">Choose as many as you like.</p>
            <div className="row">
                {needs.map((need, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div
                            className={`card text-center additional-need ${selectedNeeds.includes(need.value) ? 'selected' : ''}`}
                            onClick={() => handleCheckboxChange(need.value)}
                        >
                            <div className="icon">
                                <img
                                    src={`/assets/frontend/form_img/${need.imgSrc}`}
                                    alt={need.label}
                                />
                            </div>
                            <div className="mt-2">{need.label}</div>
                            <input
                                type="checkbox"
                                name="additionalNeeds[]"
                                value={need.value}
                                checked={selectedNeeds.includes(need.value)}
                                className="additional-need-checkbox d-none"
                                readOnly
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>
                Ok
            </button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step6;
