type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = {
  name: 'Alice',
  address: {
    city: 'Kyiv',
  },
};

console.log(user);

/*console.log(user.address?.city);

Завдання:

Створіть тип для user.
Зробіть address необов’язковим.
Перевірте, що user.address?.city не викликає помилки.*/
