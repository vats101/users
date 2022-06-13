import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const SingleUser = () => {
    const [loading, setLoading] = useState(false);
    const [toBeLoaded, setToBeLoaded] = useState(false);
    var [user, setUser] = useState({});
    const [img, setImg] = useState();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        async function getSingleUser() {
            setLoading(true);
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const data1 = await response.json();
            user = data1.data;
            setUser(data1.data);
            const res = await fetch(`https://reqres.in/img/faces/${id}-image.jpg`);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
            setLoading(false);
        }
        getSingleUser();
    }, [])


    return (
        <>
            {loading && <Loader></Loader>}
            {!loading && !toBeLoaded &&
                <button className="loadingbtn" onClick={(e) => {
                    setToBeLoaded(true);
                    toBeLoaded=true;
                }}>Click here to view the User details</button>
            }
            {!loading && toBeLoaded &&
                <div className="card">
                    <div className="leftsection">
                        <img className="userimage" src={img}></img>
                    </div>
                    <div className='rightsection'>
                        <h3>First Name : {user.first_name} </h3>
                        <h3>Last Name  : {user.last_name} </h3>
                        <h3>Email : {user.email} </h3>
                    </div>
                </div>
            }
        </>

    )
}

export default SingleUser