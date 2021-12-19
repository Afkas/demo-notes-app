export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `I still have a profound hatered for Hello, World Applications! Your request was received at ${event.requestContext.time}.` ,
  };
}
