import React from "react";
import PropTypes from 'prop-types';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MaterialCheckbox from "@material-ui/core/Checkbox";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        }
    }

    componentDidMount() {
        const { checked } = this.props;
        this.setState({
            checked,
        });
    }

    handleChange = event => {
        const { value, checked } = event.target;
        const { onChange } = this.props;
        this.setState({ checked });
        if (onChange && typeof onChange === 'function') {
            onChange(value, checked)
        }
    };

    render() {
        const { checked } = this.state;
        const { value, label } = this.props;
        return (
            <FormControlLabel
                control={
                    <MaterialCheckbox
                        checked={checked}
                        onChange={this.handleChange}
                        value={value}
                    />
                }
                label={label}
            />
        );
    }
}

Checkbox.propTypes = {
    value: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    onChange: PropTypes.func,
    checked: PropTypes.bool,
}
export default (Checkbox);