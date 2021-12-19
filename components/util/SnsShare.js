import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function SnsShare({link}) {
    const textInput = useRef();
    const [clicked, setClicked] = useState(false);

    const copy = () => {
        const el = textInput.current;
        el.select();
        document.execCommand("copy");
    };

    const onClick = () => {
        setClicked(true);
        copy();
    };

    return (
        <div className={copy}>
            <input
                className="form-control"
                type="text"
                value={link}
                ref={textInput}
                readOnly
            ></input>
            <button className="btn btn-primary" onClick={onClick}>링크 복사</button>
            {clicked && <p>복사됨</p>}
        </div>
    );
}
