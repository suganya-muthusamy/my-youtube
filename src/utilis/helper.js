// Function to generate a new chat message
function generateMessage() {
  // Sample users and messages
  const users = ["Alice", "Bob", "Charlie", "David", "Emma"];
  const messages = [
    "Hello, how are you?",
    "This is amazing!",
    "What's happening?",
    "Can anyone help me?",
    "This is a test message.",
  ];
  const user = users[Math.floor(Math.random() * users.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];

  const data = {
    user: user,
    message: message,
  };

  return data;
}

export default generateMessage;
