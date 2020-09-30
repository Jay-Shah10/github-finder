import React from 'react'
import PropTypes from 'prop-types'


const UserItems = ({user: {login, avatar_url, html_url}}) =>  {
    // adding in State for the class.
    // THis will run when the component runs.

    // constructor(){
    //     super();
    //     this.state = {
    //         id: '1',
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url: 'https://github.com/mojombo'
    //     }
    // }

        // This allows us to deconstruct the state. Do not need to add in the 'this.state.x'.
        //Giving it a cleaner look. This also works on props.
    return (
        <div className="card text-center">
            <img src={avatar_url}
            alt="" className="round-img"
            style={{ width:'60px' }}/>

        <h3> {login} </h3>
        <div>
            <a href={ html_url } className="btn btn-dark btn-sm my-1">More</a>
        </div>

        </div>
    );

};

UserItems.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItems
