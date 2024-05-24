import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

// DATE PICKER COMPONENT
function Search() {
    const history = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: startDate, // Keep the end date same as start date
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
    }

    return (
        <div className='search'>
            <div className='search-wrap'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                showDateDisplay={false} // Hide the end date display
            />
            <input min={0} defaultValue={""} type="number" className='guest-input' placeholder='Number of guests...'/>
            <Button onClick={() => history.push('/search')}>Search Restaurants</Button>
            </div>
        </div>
    )
}

export default Search;
