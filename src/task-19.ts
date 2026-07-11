// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

import axios from 'axios';
interface User {}

const fetchUser = async userId => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async id => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.
