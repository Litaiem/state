import React from 'react'


const Profile = ({users}) => {

    return (
        <div>
            {
                users.map((data)=>(
                <User data={data}  />
                ))
            }
            
        </div>
    )
}

export default Profile 