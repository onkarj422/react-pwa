import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class FlipkartTileForSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return(
            <div className="slider-container">
                <div>
                    <a>
                        <div className="image-container">
                            <div>
                                <img src={data.image} alt="category" />
                            </div>
                        </div>
                        <div className="catergory-name">{data.categoryName}</div>
                        <div className="offer-percentage">{data.offerPercentage}</div>
                        <div className="extra-text">{data.extraText}</div>
                    </a>
                </div>
            </div>
        )
    }
}

FlipkartTileForSlider.defaultProps = {
    // data: {
    //     image: 'https://rukminim1.flixcart.com/image/540/648/jpmxuvk0/t-shirt/y/a/y/m-mnbd18hnfs01a-metronaut-original-imafbtrfp65yyqky.jpeg?q=50',
    //     categoryName: 'T-Shirts',
    //     offerPercentage: 'Under ₹499',
    //     extraText: 'Billion & Metronaut'
    // }
}

FlipkartTileForSlider.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string,
        categoryName: PropTypes.string,
        offerPercentage: PropTypes.string,
        extraText: PropTypes.string,
    })
}

export default FlipkartTileForSlider;
