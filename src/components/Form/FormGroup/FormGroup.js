import React from 'react';
import "./FormGroup.scss"

const FormGroup = ({title, children}) => {
    return (
        <div className={"form-group"}>
            <div className="form-group-tile">
                {title}
            </div>
            <div className="form-group-content">
                {children}
            </div>
        </div>
    );
};

export default FormGroup;