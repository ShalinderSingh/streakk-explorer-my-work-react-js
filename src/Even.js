
import React, { useState } from 'react'

const Even = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    const [showNumber, setShowNumber] = useState('')


    const clickHandle = () => {

    }


    return (
        <div>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="text">First Name:</label>
                    <input onClick={clickHandle} type="text" class="form-control" placeholder="Enter first name" id="email" />
                </div>
                <div class="form-group">
                    <label for="text">Last Name:</label>
                    <input type="text" class="form-control" placeholder="Enter last name" id="email" />
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" />
                </div>
                <div class="form-group">
                    <label for="number">Phone :</label>
                    <input type="number" class="form-control" placeholder="Enter phone number" id="pwd" />
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                        <input type="radio" value="Male" name="gender" />  Male
                        <input type="radio" value="Female" name="gender" />  Female
                        <input type="radio" value="Other" name="gender" />  Other
                    </label>

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Even