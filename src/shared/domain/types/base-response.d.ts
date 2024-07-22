type BaseReponse<T> = {
  data: T;
  success: boolean;
  message: string;
  statusCode: number;
};

export default BaseReponse;
