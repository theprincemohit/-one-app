import React, { useState } from "react";
import './Input.scss'
export function Input() {
    const [state, setState] = useState('');
    return <input className="input-primary" onChange={(e) => setState(e.target.value)} value={state} />
}
 