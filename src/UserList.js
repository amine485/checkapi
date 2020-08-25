import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Userlist.css'
function UserList() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users',);

      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <ul className='bg'>
      {data.map(item => (
        <div>
          <ul>         
        <li>
          {item.id}
          </li>
          </ul>
          <ul> 
          <li>
          {item.name}
          </li>
          <li >
          {item.username}
          </li>
            <li>
          {item.email}
          </li>
            <li>
          {item.address.street}
          </li>
            <li>
          {item.address.suite}
          </li>
            <li>
          {item.address.city}
          </li>
            <li>
          {item.address.zipcode}
          </li>
            <li>
          {item.address.geo.lat}
          </li>
            <li>
          {item.address.geo.lng}
          </li>
            <li>
          {item.phone}
          </li>
            <li>
          {item.website}
          </li>
            <li>
          {item.company.name}
          </li>
            <li>
          {item.company.catchPhrase}
          </li>
          </ul> 
          <p className="color">#</p>
          
          </div>
      ))}
    </ul>
  );
}
 
export default UserList;