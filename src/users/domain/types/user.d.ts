type User = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  cellphone: string;
  uuid?: string;
  created_at?: Date;
  updated_at?: Date;
};

export default User;
