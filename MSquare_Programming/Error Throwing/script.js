// Throw Error

const registerUser = user => {
  if (!user.name || !user.email) {
    throw new Error("User must have both name and email...");
  }
  return "Registered successfully";
};

const user = { name: "Msquare Programming", email: "abcd@gmail.com" };
try {
  const status = registerUser(user);
  console.log(status);
} catch (error) {
  console.log("Inside catch: ", error);
}

console.log("rest of coeds");
console.log("rest of coeds");
console.log("rest of coeds");
console.log("rest of coeds");
