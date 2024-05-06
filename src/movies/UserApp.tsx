/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { users, User } from "./users";

const UserDetail = ({
  user,
  handleUserUpdate,
}: {
  user: User;
  handleUserUpdate: (user: User) => void;
}) => {
  const { id, firstname, age } = user;
  const [inputFirstName, setInputFirstName] = useState(firstname || "");
  const [inputAge, setInputAge] = useState(age || 0);
  const [inputId, setInputId] = useState(id || "");
  const [enableEdit, setEnableEdit] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(`id:${inputId} firstName:${inputFirstName} age:${inputAge}`);
    let updatedUser = {
      id: +inputId,
      firstname: inputFirstName,
      age: inputAge,
    };
    console.log("update user:", updatedUser);
    handleUserUpdate(updatedUser);
    setEnableEdit(false);
  };

  const handleCancel = () => {
    console.log("Handle cancel clicked");
    setInputFirstName(firstname);
    setInputAge(age);
    setInputId(id);
    setEnableEdit(false);
  };

  return (
    <article>
      <header>
        <span>{id}</span>
        <span>{firstname}</span>
        <span>{age}</span>
        <button onClick={() => setEnableEdit(!enableEdit)}>Edit</button>
        {enableEdit && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
            />
            <input
              type="text"
              value={inputFirstName}
              onChange={(e) => setInputFirstName(e.target.value)}
            />
            <input
              type="text"
              value={inputAge}
              onChange={(e) => setInputAge(+e.target.value)}
            />
            <button type="submit">Save</button>
            <button onClick={() => handleCancel()}>Cancel</button>
          </form>
        )}
      </header>
    </article>
  );
};

export const UserApp = () => {
  const [inputUsers, setInputUsers] = useState<User[]>(users);
  const handleUserUpdate = (user: User) => {
    console.log(user.id, " is changed");
    console.log({ user });
    const newUsers: User[] = [...inputUsers];
    for (let i = 0; i < newUsers.length; i++) {
      if (newUsers[i].id === user.id) {
        newUsers[i] = { ...user };
      }
    }
    console.log({ newUsers });
    setInputUsers(newUsers);
  };
  return (
    <main>
      {inputUsers?.map((user) => (
        <UserDetail
          key={user.id}
          // id={user.id}
          // firstname={user.firstname}
          // age={user.age}
          user={user}
          handleUserUpdate={handleUserUpdate}
        />
      ))}
    </main>
  );
};
