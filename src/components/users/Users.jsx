import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";

const Users = () => {
  const [albom, setAlbom] = useState(null);
  const [relaut, setRelaut] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setAlbom(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [relaut]);

  const user = {
    id: "12",
    name: "Diyorbek.B",
    username: "@diyorbek_19_03",
    email: "bekmurodovdiyorbek288@gmail.com",
  };

  const AddUser = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users", user);
      const data = await res.data;
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const CardDelet = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => {
        console.log(res);
        setRelaut((p) => !p);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const card = albom?.map((el) => (

    <div className="form" key={el.id}>
      <span>name</span>
        
      <p className="nome">{el.name}</p>

      <span>username</span>
      <p className="nome">{el.username}</p>
      <span>email</span>
      <p className="nome">{el.email}</p>
      <div className="btnname">
      <button className="btn" onClick={() => CardDelet(el.id)}> Delete</button>
      <button className="btn" onClick={AddUser}> Create User</button>
      </div>
    </div>
    
  ));
 
  return (
    <div className="container">
      <div className="wrapper">{card}</div>
    </div>
  );
};

export default Users;
