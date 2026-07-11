interface CreateUserParams {
  name: string;
  age: number;
}
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: CreateUserParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: 'Alice', age: 30 }));

//Завдання
//Типізуйте функцію повністю: параметри і повернення функції.
