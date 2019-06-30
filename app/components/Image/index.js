import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getPaddingTopFromAspectRatio = (aspectRatio) => {
        if (!aspectRatio) return '100';
        const splitList = aspectRatio.split(':');
        if (!splitList[1] || !splitList[0] || Number.isNaN(splitList[1]) || Number.isNaN(splitList[0])) return '100';
        return(parseInt(splitList[1], 10) / parseInt(splitList[0], 10)) * 100;
    }

    render() {
        const { image } = this.props;
        const paddingTop = this.getPaddingTopFromAspectRatio(image.aspectRatio);
        return (
            <a className="component-image-container">
                <div style={{ paddingTop: `${paddingTop}%` }}>
                    <div style={{ paddingTop: `${paddingTop}%` }}>
                        <img src={image.url} alt="data" />
                    </div>
                </div>
            </a>
        )
    }
}

Image.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string,
        aspectRatio: PropTypes.string,
        thumbnailUrl: PropTypes.string,
    })
}

export default Image;