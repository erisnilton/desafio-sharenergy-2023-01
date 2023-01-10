export function login(username: string, password: string, remember: boolean) {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("remember");
  localStorage.removeItem("authenticated");
  if (username === "desafiosharenergy" && password === "sh@r3n3rgy") {
    localStorage.setItem("username", username);
    localStorage.setItem("authenticated", "true");
    if (remember) {
      localStorage.setItem("password", password);
      localStorage.setItem("remember", remember.toString());
    }
    return Promise.resolve({
      username: "desafiosharenergy",
    });
  }
  return Promise.reject({ message: "Usuário ou senha inválidos" });
}

export function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("remember");
  localStorage.removeItem("authenticated");
  return Promise.resolve();
}
