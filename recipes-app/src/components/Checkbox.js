import React, {useEffect, useState} from "react";

export default function Checkbox() {
    // 체크박스 상태
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    });

    return (
        <>
            <input
                type={"checkbox"}
                value={checked}
                onChange={() => {
                    setChecked(checked => !checked)
                }}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
}