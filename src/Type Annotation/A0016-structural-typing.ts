type VerifyUserGn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserGn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser: User = { username: 'joao', password: '123456' };
const sentUser: User = { username: 'joao', password: '1234561' };

const loogedIn = verifyUser(bdUser, sentUser);

console.log(loogedIn);
