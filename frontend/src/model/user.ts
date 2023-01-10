export type User = {
  dob: {
    age: number;
  };

  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;

  login: {
    uuid: string;
    username: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
