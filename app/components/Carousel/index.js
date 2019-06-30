import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './styles.scss';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            activeIndex: 1,
            transition: true,
            list: [],
        };
    }

    componentDidMount() {
        const { autoSlide, list } = this.props;
        window.addEventListener('resize', this.setSize.bind(this));
        setTimeout(this.setSize.bind(this), 100);
        this.setAutoSlide(autoSlide);
        this.createList(list);
    }

    componentWillReceiveProps(nextProps) {
        const { autoSlide: nextAutoSlide, slideInterval: nextSlideInterval } = nextProps;
        const { autoSlide: prevAutoSlide, slideInterval: prevSlideinterval } = this.props;
        if (nextAutoSlide !== prevAutoSlide || nextSlideInterval !== prevSlideinterval) {
            this.setAutoSlide(nextAutoSlide);
        }
    }

    createList = (list) => {
        const { length } = list;
        const listToSave = [].concat(list[length - 1], list, list[0]);
        this.setState({
            list: listToSave,
        });
    }

    setAutoSlide = (status = true) => {
        const { slideInterval } = this.props;
        if (status) {
            this.timeout = setInterval(this.changeActiveIndex.bind(this), slideInterval);
        } else {
            clearInterval(this.timeout);
        }
    }

    changeActiveIndex = () => {
        const { activeIndex } = this.state;
        const newIndex = activeIndex + 1;
        this.setSlideIndex(newIndex);
    }
    
    checkForEnd = () => {
        const { activeIndex, list } = this.state;
        const { length } = list;
        let newIndex = activeIndex;
        let transition = true; 
        if (activeIndex === length - 1 || activeIndex === 0) {
            if (activeIndex === length - 1) {
                newIndex = 1;
                transition = false;
            }
            if (activeIndex === 0) {
                newIndex = length - 2;
                transition = false;
            }
            setTimeout(() => {
                this.setState({
                    activeIndex: newIndex,
                    transition,
                })
            }, 500);
        }
    }

    setSlideIndex = (activeIndex, transition = true) => {
        this.setState({
            activeIndex,
            transition,
        }, this.checkForEnd);
    }

    setSize = () => {
        const width = document.getElementsByClassName('component-carousel-index-container')[0].offsetWidth;
        this.setState({
            width,
        })
    }

    getStyle = () => {
        const { activeIndex, width, transition, list } = this.state;
        return ({ 
            width: `${list.length * width}px`,
            transform: `translateX(calc(${activeIndex} * (-${width}px)))`,
            transition: transition ? 'transform .2s ease-out' : 'none',
        })
    }

    render() {
        const { autoSlide, stopOnHover } = this.props;
        const { list, width } = this.state;
        return (
            <div className="component-carousel-index-container">
                <div 
                    className="carousel-container" 
                    id="carousel-container" 
                    style={this.getStyle()}
                    onMouseEnter={this.setAutoSlide.bind(this, !stopOnHover)}
                    onMouseLeave={this.setAutoSlide.bind(this, autoSlide)}
                >
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item-container"
                            style={{
                                width,
                            }}
                        >
                            <div>
                                <Image image={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Carousel.defaultProps = {
    slideInterval: 3000,
    autoSlide: true,
    stopOnHover: true,
};

Carousel.propTypes = {
    slideInterval: PropTypes.number,
    autoSlide: PropTypes.bool,
    stopOnHover: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        aspectRatio: PropTypes.string,
    })),
}

export default Carousel;