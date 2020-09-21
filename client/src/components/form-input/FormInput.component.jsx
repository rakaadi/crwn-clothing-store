import React from "react";

import { GroupContainer, FormInputContainer, FormInputLabel } from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            {
                label ?
                    (
                        <FormInputLabel className={`${otherProps.value ? "shrink" : ""}`}>
                            {label}
                        </FormInputLabel>
                    ) : null
            }
        </GroupContainer>
    )
}

export default FormInput;