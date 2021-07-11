import React from "react";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
} from "@material-ui/core";

export const ResourceTypeSelector = (props) => {
    const { selected, onSelect } = props;

    const options = ["resource", "ladder"];

    const onChange = (e) => {
        onSelect(e.target.value);
    };

    return (
        <FormControl style={{ marginLeft: 16 }}>
            <RadioGroup row onChange={onChange} value={selected}>
                {options.map((option, index) => (
                    <FormControlLabel
                        value={option}
                        key={option}
                        control={<Radio color="primary" />}
                        label={option}
                        labelPlacement="end"
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
