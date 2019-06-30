import React from 'react';
import Proptypes from 'prop-types';
import { Collapse, Badge } from '@material-ui/core';
import { KeyboardArrowDown, Search } from '@material-ui/icons'
import Checkbox from './index';
import "./styles.scss";

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            search: '',
            group: {
                title: '',
                list: [],
            }
        };
    }

    componentDidMount() {
        const { data } = this.props;
        this.setState({
            group: data,
        })
    }

    componentWillReceiveProps(nextProps) {
        const { loadingData: nextLoading, data } = nextProps;
        const { loadingData: prevLoading } = this.props;
        if (!nextLoading && prevLoading) {
            this.setState({
                group: data,
            })
        }
    }

    calculateBadgeCount = () => {
        const { group } = this.state;
        return group && group.list && group.list.filter(item => item.checked).length;
    }

    onChangeCheckbox = (value, checked) => {
        const { onChangeCheckbox } = this.props;
        const { group } = this.state;
        const index = group.list.findIndex(item => item.value === value);
        if (index > -1) {
            group.list[index].checked = checked || false;
        }
        if (onChangeCheckbox && typeof onChangeCheckbox === 'function') {
            onChangeCheckbox(value, checked);
        }
    }

    onChangeSearch = (evt) => {
        const { value } = evt.target;
        this.setState({
            search: value,
        });
    }

    filterForSearch = (group, search) => {
        if (group && group.list && Array.isArray(group.list) && typeof search === 'string') {
            return group.list.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
        }
        return [];
    }

    handleCollapseHeaderClick = () => {
        const { open } = this.state;
        this.setState({
            open: !open,
        });
    }
    
    render() {
        const { open, group, search } = this.state;
        const list = this.filterForSearch(group, search);
        return (
            <div className="checkbox-group-container">
                <div className="checkbox-group-title-container" role="presentation" onClick={this.handleCollapseHeaderClick}>
                    <Badge color="secondary" badgeContent={this.calculateBadgeCount()} invisible={open ? true : !this.calculateBadgeCount()}>
                        <div>{group.title}</div>
                    </Badge>
                    <KeyboardArrowDown />
                </div>
                <Collapse in={open}>
                    <div>
                        <div className="checkbox-group-search-container">
                            <If condition={open}>
                                <Search />
                            </If>
                            <input type="text" placeholder="Brand" onChange={this.onChangeSearch} />
                        </div>
                        <div className="checkbox-group-collapse-container">
                            <If condition={list && list.length}>
                                {list.map((item, index) => <Checkbox key={index} {...item} onChange={this.onChangeCheckbox} />)}
                                <Else />
                                <div className="no-data-found">No data available.</div>
                            </If>
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

CheckboxGroup.propTypes = {
    
    onChangeCheckbox: Proptypes.func,
    data: Proptypes.shape({
        title: Proptypes.string,
        list: Proptypes.shape({
            label: Proptypes.string,
            value: Proptypes.string,
            checked: Proptypes.bool,
        }),
    }),
    loadingData: Proptypes.bool,
}
export default CheckboxGroup;