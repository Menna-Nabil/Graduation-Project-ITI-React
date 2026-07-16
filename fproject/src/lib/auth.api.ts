const API_URL = "http://localhost:5000/users";

// Register user
export async function registerUser(userData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
}

// Login user
export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}?email=${email}&password=${password}`);
  return res.json();
}