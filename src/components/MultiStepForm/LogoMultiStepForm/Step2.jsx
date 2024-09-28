import React, { useState } from 'react';

const Step2 = ({ onNext, onPrevious, previousData }) => {
    const [selectedFont, setSelectedFont] = useState('');

    const handleFontSelection = (value) => {
        setSelectedFont(value);
    };

    const handleNext = () => {
        if (!selectedFont) {
            // Optionally handle the error if no font is selected
            return;
        }
        onNext({ fontSelection: selectedFont });
        console.log('Step2 data:', {
            fontSelection: selectedFont,
            logoType: previousData.logoType // Log Step1 data
        });
    };

    return (
        <div className="form-step2">
            <p>
                <span className="step-number">2 →</span> If you had to choose one of these fonts, which would you choose?
            </p>
            <p className="subtext">Note: We will not actually use the following fonts to create your logo. It's just another great way to identify the design direction.</p>
            <div className="row">
                {['classic', 'serif', 'rounded', 'modern'].map((font) => (
                    <div className="col-md-3 mb-3" key={font}>
                        <div
                            className={`card text-center font-selection ${selectedFont === font ? 'selected' : ''}`}
                            onClick={() => handleFontSelection(font)}
                        >
                            <div className="icon">
                                <img
                                    src={`/assets/frontend/form_img/default_${font}.png`}
                                    alt={font}
                                />
                            </div>
                            <div className="mt-2">{font.charAt(0).toUpperCase() + font.slice(1)}</div>
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

export default Step2;
