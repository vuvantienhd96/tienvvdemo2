import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function TextInputGroup({
    label,
    name,
    value,
    onChange,
    plaholder,
    type,
    error

}) {
    return (
        <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
                    type={type}
                    name={name}
                    // className="is-invalid form-control form-control-lg"
                    className={classnames('form-control form-control-lg', {'is-invalid': error} )}
                    placeholder={plaholder}
                    value={value}
                    onChange={onChange}
                />
                { error && <div className="invalid-feedback">{error}</div> }
            </div>
    )
}

TextInputGroup.defaultProps = {
    type: 'text'
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func,
    plaholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
}
