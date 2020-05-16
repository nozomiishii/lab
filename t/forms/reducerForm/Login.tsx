interface User {
  username: string;
  password: string;
}

export const login = async ({ username, password }: User) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "nozomi" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
