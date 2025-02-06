export const login = (email, password) => {
  const user = dummyData.find(
    (user) => user.email === email.toLowerCase() && user.password === password
  );
  return user || null;
};

export const dummyData = [
  {
    email: "fsdk@gmail.com",
    password: "123",
    id: 1,
    token: 11,
    username: "Ahmed",
  },
  {
    email: "jane.doe@example.com",
    password: "456",
    id: 2,
    token: 22,
    username: "Tobi",
  },
  {
    email: "john.smith@example.com",
    password: "789",
    id: 3,
    token: 33,
    username: "Mostafa",
  },
  {
    email: "alice.jones@example.com",
    password: "abc",
    id: 4,
    token: 44,
    username: "Ali",
  },
];
