/* eslint-disable @typescript-eslint/no-unused-vars */
import { users, User } from "./users";

const UserDetail = ({ id, firstname, age }: User) => {
  return (
    <article>
      <header>
        <span>{id}</span>
        <span>{firstname}</span>
        <span>{age}</span>
        <button>Edit</button>
      </header>
    </article>
  );
};

export const UserApp = () => {
  return (
    <main>
      {users.map((user) => (
        <UserDetail id={user.id} firstname={user.firstname} age={user.age} />
      ))}
    </main>
  );
};
