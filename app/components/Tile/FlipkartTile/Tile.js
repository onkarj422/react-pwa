import React from "react";
import PropTypes from 'prop-types';
import "./styles.scss";
import Image from "../../Image";

class FlipkartTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <div>
                    <Image image={data.image} />
                    <div className="product-info">
                        <div className="company-name">{data.companyName}</div>
                        <a className="product-name">
                            {data.productName}
                        </a>
                        <a className="product-price" >
                            <div className="price-row">
                                <div className="original-price">₹{data.productPrice.currentPrice}</div>
                                <div className="previous-price">₹{data.productPrice.originalPrice}</div>
                                <div className="offer-percentage">
                                    <span>{data.productPrice.offerPercentage}% off</span>
                                </div>
                            </div>
                        </a>
                        <div className="product-sizes">
                            <div>
                                <span>Size</span>&nbsp;{data.availableSizes.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FlipkartTile.defaultProps = {
    // data: {
    //     image: {
    //         url: 'https://rukminim1.flixcart.com/image/540/648/jpmxuvk0/t-shirt/y/a/y/m-mnbd18hnfs01a-metronaut-original-imafbtrfp65yyqky.jpeg?q=50',
    //         aspectRatio: '5:6',
    //     },
    //     companyName: 'Metronaut',
    //     productName: 'Solid Men Round Neck Dark Green T-Shirt',
    //     productPrice: {
    //         currentPrice: '239',
    //         originalPrice: '599',
    //         offerPercentage: '60',
    //     },
    //     availableSizes: ['S', 'M', 'L', 'XL'],
    // }
}

FlipkartTile.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.shape({
            url: PropTypes.string,
            aspectRatio: PropTypes.string,
        }),
        companyName: PropTypes.string,
        productName: PropTypes.string,
        productPrice: PropTypes.shape({
            currentPrice: PropTypes.string,
            originalPrice: PropTypes.string,
            offerPercentage: PropTypes.string,
        }),
        availableSizes: PropTypes.arrayOf(PropTypes.string),
    })
}

export default FlipkartTile;
