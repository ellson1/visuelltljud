exports.handler = async (event) => {
  const body = {
    status: "success",
    message: "Hello, Visuellt Ljud!",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};