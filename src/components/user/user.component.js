import React, { useState, useEffect } from "react";
import UserCardComponent from "./user-card.component";
import axios from "axios";

function UserComponent() {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        // console.log(result.data);
        setUsers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    let updatedList =
      users.length > 1 ? users.filter((data) => data.id !== id) : users;
    setUsers(updatedList);
  };
  return (
    <React.Fragment>
      {users && (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {users.map((info, index) => (
              <UserCardComponent
                key={index}
                userInfo={info}
                allUsers={users}
                setUsers={setUsers}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default UserComponent;
