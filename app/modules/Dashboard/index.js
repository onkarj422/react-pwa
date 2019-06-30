import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import CheckboxGroup from '../../components/Buttons/Checkbox/group';
import withAppShell from '../../components/AppShell/withAppShell';
import Tile from '../../components/Tile/FlipkartTile/Tile';
import Tile2 from '../../components/Tile/FlipkartTilesForSlider';
import Image from '../../components/Image';
import { flipkartTileData, filterGroup, carouselImage } from '../../components/Tile/tileData';
import Carousel from '../../components/Carousel';

const styled = withStyles({
    drawer: {
        width: 240,
    },
    row: {
        marginBottom: '8px',
        display: 'flex',
        '-webkit-align-items': 'stretch',
        '-ms-flex-align': 'stretch',
        'align-items': 'stretch',
        background: '#fff',
        'background-color': '#fff',
        'justifyContent': 'center',
        flexWrap: 'wrap',
    },
    rowWrapper: {
        width: '100%',
        display: 'block',
    },
    container: {
        display: 'flex',
        flexGrow: '1',
        flexFlow: 'column',
        overflow: 'auto'
    },
    slideRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    overflowAuto: {
        overflow: 'auto',
    },
    banners: {
        display: 'inline-block',
        paddingLeft: 0,
        paddingRight: '8px',
    },
    carouselContainer: {
        width: '100%',
    },
    checboxGroupContainer: {
        display: 'flex',
        justifyContent: 'space-around',
    },
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children, location, classes } = this.props;
        return (
            <div>
                {location.pathname}
                {children}
                <div className={classes.checboxGroupContainer}>
                    <CheckboxGroup data={filterGroup} loadingData={false} />
                    <CheckboxGroup data={filterGroup} loadingData={false} />
                    <CheckboxGroup data={filterGroup} loadingData={false} />
                    <CheckboxGroup data={filterGroup} loadingData={false} />
                </div>
                <div className={classes.carouselContainer}>
                    <Carousel list={[carouselImage, carouselImage, carouselImage, carouselImage]} />
                </div>

                <div className={classes.container}>
                    {flipkartTileData.filter(tile => tile.type === 'FLIPKART_TILE').map((i) => (
                        <div key={i} className={classes.rowWrapper}>
                            <div className={classes.row}>
                                {i.data.map((item, key) => (
                                    <Tile key={key} data={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {flipkartTileData.filter(tile => tile.type === 'FLIPKART_SLIDER_TILE').map((tile, rowIndex) => (
                    <div key={rowIndex} className={classes.overflowAuto}>
                        <div className={classes.slideRow}>
                            {tile.data.map((item, index) => (
                                <Tile2 key={index} data={item} />
                            ))}
                        </div>
                    </div>
                ))}
                

                {flipkartTileData.filter(item => item.type === 'FLIPKART_BANNER').map((item) => (
                    item.data.map(image => (
                        <div key={item} style={{ width: `${100/item.data.length}%`}} className={classes.banners}>
                            <Image image={image} />
                        </div>
                    ))
                ))}
            </div>
        );
    }
}

Dashboard.defaultProps = {
    children: <></>
}

Dashboard.propTypes = {
    children: PropTypes.element,
    shell: PropTypes.instanceOf(Object),
    classes: PropTypes.instanceOf(Object),
    location: PropTypes.instanceOf(Object),
};

export default withAppShell(styled(Dashboard), { title: 'Dashboard' });
