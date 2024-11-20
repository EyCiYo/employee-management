import { useEffect, useRef, useState } from "react";
import "./DatePicker.css";

const DatePicker = (prop) => {
    const [date, setDate] = useState("");
    const placeholdeRef = useRef(null);
    const dateInputRef = useRef(null);

    const today = new Date().toISOString().split("T")[0];

    const handleDateChange = (e) => {
        setDate(e.target.value);
        console.log(e.target);
    };
    const handleClick = () => {
        dateInputRef.current.click();
        console.log("Clicked Calendar", dateInputRef);
    };

    useEffect(() => {
        if (date.length > 0) {
            if (placeholdeRef.current) {
                placeholdeRef.current.style.color = "black";
            }
        } else {
            if (placeholdeRef.current) {
                placeholdeRef.current.style.color = "#888";
            }
        }
    }, [date]);
    return (
        <div className="input">
            {prop.label && (
                <label htmlFor={prop.name} style={{ margin: "0 5px" }}>
                    {prop.label}
                </label>
            )}
            <div className="date-wrapper" onClick={handleClick}>
                <input
                    type="date"
                    name={prop.name}
                    className="hidden-date"
                    value={date}
                    onChange={(e) => {
                        handleDateChange(e);
                        prop.handleChange(e);
                    }}
                    ref={dateInputRef}
                    max={today}
                    min="2000-01-01"
                    id={prop.name}
                />
                <div className="placeholder" ref={placeholdeRef}>
                    {date.length > 0 ? date : "Select Date"}
                </div>
            </div>
        </div>
    );
};

DatePicker.propTypes = {};

export default DatePicker;
