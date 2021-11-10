import React, { useState } from "react";
import PropTypes from "prop-types";
import './YouTube.css';
import coasterCreditsLogo from '../../images/coasterCreditsLogoRectangle.png';

export const YoutubeEmbed = ({ embedId, listId, indexId }) => (
    <>
        <div className="youtube-ccLogoDiv">
            <div className="youtube-ccLogo">
                <img src={coasterCreditsLogo} />
            </div>
        </div>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}?&autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    </>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

