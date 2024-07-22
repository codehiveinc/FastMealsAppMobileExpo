type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cellphone: string;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default User;
