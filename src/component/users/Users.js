import React, { Component } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
    if (loading){
        return <Spinner/>
    }else {
        return (
            <div style={userStyle}>
                {users.map(
                    // list in react needs to have a unique key in order to display properly.
                    // We are using the user's id to show that.
                    user => (
                        <UserItems key={user.id} user={user} />
                    )
                )
            }
            </div>
        )
    }
}

Users.prototype = {
   users: PropTypes.array.isRequired,
   loading: PropTypes.bool.isRequired
}

// Here, we are using a variable to define the css we want to display.
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
