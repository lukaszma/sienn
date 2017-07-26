import React from 'react';
import PropTypes from 'prop-types'
class TextInput extends React.Component {

    render() {
        const { name, label, onChange, placeholder, value, error, type = "text", onClick, onFocus, wrapperClass } = this.props;
        return (
            <div className={wrapperClass}>
                <label htmlFor={name}>{label}</label>
                <div className="field">
                    <input
                        type={type}
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        onClick={onClick}
                        onFocus={onFocus} />
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    }

};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;