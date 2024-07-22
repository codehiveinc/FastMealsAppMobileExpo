class HttpRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HttpRequestError";
  }
}

export default HttpRequestError;
