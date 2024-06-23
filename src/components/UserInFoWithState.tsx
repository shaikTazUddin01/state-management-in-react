import React, { useState } from "react";

const UserInFoWithState = () => {
  const [user, setUser] = useState({ name: "", age: "", hobbie: [] });
  console.log(user);
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input type="number" placeholder="age"  onChange={(e) => setUser({ ...user, age: e.target.value })}/>
        <input type="text" placeholder="hobbies"  onBlur={(e) => setUser({ ...user, hobbie: [...user?.hobbie,e.target.value] })}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserInFoWithState;
