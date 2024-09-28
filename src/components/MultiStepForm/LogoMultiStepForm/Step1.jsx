import React, { useState } from 'react';

const Step1 = ({ onNext }) => {
    const [selectedLogoTypes, setSelectedLogoTypes] = useState([]);
    const [error, setError] = useState('');

    const handleSelect = (value) => {
        setError(''); // Clear error message when user selects an option
        if (selectedLogoTypes.includes(value)) {
            setSelectedLogoTypes(selectedLogoTypes.filter(type => type !== value));
        } else {
            setSelectedLogoTypes([...selectedLogoTypes, value]);
        }
    };

    const handleNext = () => {
        if (selectedLogoTypes.length === 0) {
            setError('Please select at least one logo type.');
            return;
        }
        onNext({ logoType: selectedLogoTypes });
    };

    return (
        <div className="form-step active">
            <p><span className="step-number">1 →</span> What are the components you require for the planned logo?</p>
            <p className="subtext">
                Do you imagine your logo with a symbol? Or do you require a text-based logo? Please select below:
            </p>
            <div className="row">
                <div className="col-md-5 mb-3">
                    <div
                        className={`card text-center logo-type-selection ${selectedLogoTypes.includes('symbol') ? 'selected' : ''}`}
                        onClick={() => handleSelect('symbol')}
                    >
                        <div className="icon">
                            <img src="/assets/frontend/form_img/default_7.png" alt="Symbol Based Logo" />
                        </div>
                        <div className="mt-2">Symbol Based Logo</div>
                        <input
                            type="checkbox"
                            name="logo_type[]"
                            value="symbol_base_logo"
                            className="logo-type-selection-checkbox d-none"
                            checked={selectedLogoTypes.includes('symbol')}
                            readOnly
                        />
                    </div>
                </div>
                <div className="col-md-5 mb-3">
                    <div
                        className={`card text-center logo-type-selection ${selectedLogoTypes.includes('text') ? 'selected' : ''}`}
                        onClick={() => handleSelect('text')}
                    >
                        <div className="icon">
                            <img src="/assets/frontend/form_img/default_8.png" alt="Text Based Logo" />
                        </div>
                        <div className="mt-2">Text Based Logo</div>
                        <input
                            type="checkbox"
                            name="logo_type[]"
                            value="text_based_logo"
                            className="logo-type-selection-checkbox d-none"
                            checked={selectedLogoTypes.includes('text')}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button type="button" className="next btn btn-primary" onClick={handleNext}>
                Ok
            </button>
        </div>
    );
};

export default Step1;
