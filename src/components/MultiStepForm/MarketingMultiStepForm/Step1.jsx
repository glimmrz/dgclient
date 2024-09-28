import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faYoutube, faInstagram, faTwitter, faBlogger, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper, faBullhorn, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Step1 = ({ onNext }) => {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const platforms = [
        { name: 'Facebook Page', icon: faFacebookF, value: 'facebook_page' },
        { name: 'Google My Business', icon: faGoogle, value: 'google_my_business' },
        { name: 'YouTube Channel', icon: faYoutube, value: 'youtube_channel' },
        { name: 'Instagram', icon: faInstagram, value: 'instagram' },
        { name: 'Twitter Profile', icon: faTwitter, value: 'twitter_profile' },
        { name: 'Blog', icon: faBlogger, value: 'blog' },
        { name: 'Google Ads', icon: faGoogle, value: 'google_ads' }, // Use faGoogle as an alternative
        { name: 'Facebook Ads', icon: faFacebook, value: 'facebook_ads' },
        { name: 'SEO', icon: faBullhorn, value: 'seo' },
        { name: 'Newsletter', icon: faNewspaper, value: 'newsletter' },
        { name: 'Banners Ads', icon: faBullhorn, value: 'banners_ads' },
        { name: 'Other', icon: faEllipsisH, value: 'other' },
    ];

    const handleSelection = (value) => {
        setSelectedPlatforms((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const handleNext = () => {
        if (selectedPlatforms.length > 0) {
            onNext({ selectedPlatforms });
        } else {
            alert('Please select at least one platform.');
        }
    };

    return (
        <div className="form-step active">
            <p><span className="step-number">1 →</span> Which online marketing platform or service would you require for your campaign? This question is required.*</p>
            <p className="subtext">Choose as many as you like</p>
            <div className="row">
                {platforms.map((platform) => (
                    <div className="col-md-3 mb-3" key={platform.value}>
                        <div
                            className={`card text-center logo-type-selection ${selectedPlatforms.includes(platform.value) ? 'selected' : ''}`}
                            onClick={() => handleSelection(platform.value)}
                            aria-selected={selectedPlatforms.includes(platform.value)}
                            role="button"
                        >
                            <div className="icon">
                                <FontAwesomeIcon icon={platform.icon} size="2x" />
                            </div>
                            <div className="mt-2">{platform.name}</div>
                            <input
                                type="checkbox"
                                name="logo_type[]"
                                value={platform.value}
                                checked={selectedPlatforms.includes(platform.value)}
                                onChange={() => handleSelection(platform.value)}
                                className="logo-type-selection-checkbox d-none"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="next btn btn-primary"
                onClick={handleNext}
                disabled={selectedPlatforms.length === 0}
            >
                Ok
            </button>
        </div>
    );
};

export default Step1;
