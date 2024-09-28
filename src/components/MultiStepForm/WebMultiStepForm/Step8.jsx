import React, { useState } from 'react';

const Step8 = ({ onNext, onPrevious, previousData }) => {
    const [selectedNeeds, setSelectedNeeds] = useState([]);

    const additionalNeedsOptions = [
        { label: 'Hosting', value: 'hosting', imgSrc: 'default.png' },
        { label: 'Company Logo', value: 'company_logo', imgSrc: 'default_1.png' },
        { label: 'Newsletter', value: 'newsletter', imgSrc: 'default_2.png' },
        { label: 'Mobile App', value: 'mobile_app', imgSrc: 'default_3.png' },
        { label: 'Photo & Video Production', value: 'photo_video_production', imgSrc: 'default_4.png' },
        { label: 'Online Marketing (SEO, Ads)', value: 'online_marketing', imgSrc: 'default_5.png' },
        { label: 'Print Material', value: 'print_material', imgSrc: 'default_6.png' }
    ];

    const handleNeedClick = (value) => {
        setSelectedNeeds((prev) =>
            prev.includes(value) ? prev.filter((need) => need !== value) : [...prev, value]
        );
    };

    const handleNext = () => {
        onNext({ additional_needs: selectedNeeds });
        console.log('Step8 data:', {
            additional_needs: selectedNeeds,
            source_7: previousData.selectedBudgets ,
            source_6: previousData.source_6,
            source_5: previousData.source_5,
            stape_4: previousData.stape_4,
            font_selection: previousData.font_selection,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step8">
            <p><span className="step-number">8 →</span> Additional needs (Optional):</p>
            <p className="subtext">Choose as many as you like.</p>
            <div className="row">
                {additionalNeedsOptions.map((need) => (
                    <div key={need.value} className="col-md-3 mb-3">
                        <div
                            className={`card text-center additional-need ${selectedNeeds.includes(need.value) ? 'selected' : ''}`}
                            onClick={() => handleNeedClick(need.value)}
                        >
                            <div className="icon">
                                <img src={`/assets/frontend/form_img/${need.imgSrc}`} alt={need.label} />
                            </div>
                            <div className="mt-2">{need.label}</div>
                            <input
                                type="checkbox"
                                name="additional_needs[]"
                                value={need.value}
                                checked={selectedNeeds.includes(need.value)}
                                className="additional-need-checkbox d-none"
                                readOnly
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step8;
