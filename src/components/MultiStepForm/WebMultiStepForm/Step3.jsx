import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVideo, faImage, faFilm, faBlog, faShoppingCart, faUserLock, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Step3 = ({ onNext, onPrevious, previousData }) => {
    const [selectedFonts, setSelectedFonts] = useState([]);
    const [error, setError] = useState('');

    const handleSelect = (value) => {
        setError(''); // Clear error message when user selects an option
        if (selectedFonts.includes(value)) {
            setSelectedFonts(selectedFonts.filter(font => font !== value));
        } else {
            setSelectedFonts([...selectedFonts, value]);
        }
    };

    const handleNext = () => {
        if (selectedFonts.length === 0) {
            setError('Please select at least one font.');
            return;
        }
        onNext({ font_selection: selectedFonts });
        console.log('Step3 data:', {
            font_selection: selectedFonts,
            web_pages: previousData.web_pages,
            company_description: previousData.company_description // Log Step1 data
        });
    };

    return (
        <div className="form-step3">
            <p><span className="step-number">3 →</span> If you had to choose one of these fonts, which would you choose?</p>
            <p className="subtext">
                Note: We will not actually use the following fonts to create your logo. It's just another great way to identify the design direction.
            </p>
            <div className="row">
                {[
                    { value: 'audio', label: 'Audio', icon: faMusic },
                    { value: 'video', label: 'Video', icon: faVideo },
                    { value: 'picture_gallery', label: 'Picture Gallery', icon: faImage },
                    { value: 'animation', label: 'Animation', icon: faFilm },
                    { value: 'blog', label: 'Blog', icon: faBlog },
                    { value: 'online_shop', label: 'Online Shop', icon: faShoppingCart },
                    { value: 'client_login', label: 'Client Login', icon: faUserLock },
                    { value: 'other', label: 'Other', icon: faEllipsisH },
                ].map((font, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div
                            className={`card text-center font-selection ${selectedFonts.includes(font.value) ? 'selected' : ''}`}
                            onClick={() => handleSelect(font.value)}
                        >
                            <div className="icon">
                                <FontAwesomeIcon icon={font.icon} size="3x" />
                            </div>
                            <div className="mt-2">{font.label}</div>
                            <input
                                type="checkbox"
                                name="font_selection[]"
                                value={font.value}
                                className="font-selection-checkbox d-none"
                                checked={selectedFonts.includes(font.value)}
                                readOnly
                            />
                        </div>
                    </div>
                ))}
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button type="button" className="next btn btn-primary" onClick={handleNext}>Ok</button>
            <button type="button" className="previous btn btn-secondary" onClick={onPrevious}>
                <span><i className="fa-solid fa-chevron-up"></i></span>
            </button>
        </div>
    );
};

export default Step3;
