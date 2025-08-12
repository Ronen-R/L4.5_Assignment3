import React, { useRef, useState } from 'react'

export default function Values() {
  const [color, setColor] = useState("white");
  const [fontColor, setFontColor] = useState("silver");
  const inputRef = useRef();
  const selectRef = useRef();

  const onChange = () => {
    const input_val = inputRef.current.value
    // console.log(input_val)
    setColor(input_val);
  }

  return (
    <div className='container'>
      <h2>Values</h2>
      <h3 style={{ background: color, color: fontColor }}>Enter you favorite color: {color}</h3>
      {/* ref= כדי לקשר בין המשתנה רף לאלמנט */}
      {/* inInput - האזנה להקלדה באינפוט */}
      <input onInput={onChange} ref={inputRef} type="text" />
      <button onClick={onChange}>Change</button>
      <h3>Choose your font color</h3>
      {/* אפשר מאירוע ישירות לזמן פונקציה אנונימית */}
      <select ref={selectRef} onChange={() => {
        const select_val = selectRef.current.value
        setFontColor(select_val)
      }}>
        <option value="red">אדום</option>
        <option value="orange">כתום</option>
        <option value="green">ירוק</option>
        <option value="blue">כחול</option>

      </select>
      <br />
      <img src="/images/python.png" width={400} height={250} />
    </div>
  )
}
