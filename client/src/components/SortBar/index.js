import React from 'react';






function SortBar(props) {
    return (


        <div className="form-group">
            <div className=' row'>
                <button type="submit" name='name' onClick={props.handleSort} className="col">
                    Name
        </button>
                <button type="submit" name='name' onClick={props.handleSortRole} className="col ">
                    Role
        </button>
                <button type="submit" name='name' onClick={props.handleSortDepartment} className="col">
                    Department
        </button>
                <button type="submit" onClick={props.handleClear} className="col">
                    City
        </button>

            </div>
        </div>


    )
}





export default SortBar;