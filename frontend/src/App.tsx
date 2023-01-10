import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/navbar";
import theme from "./theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomUser from "./pages/random-user";
import HttpCat from "./pages/http-cat";
import RandomDog from "./pages/random-dog";
import Customer from "./pages/customer/customer";
import LoginForm from "./pages/login/Loginorm";
import CustomerDetails from "./pages/details";
import CustomerForm from "./pages/customer/customerForm";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/http-cat" element={<HttpCat />} />
          <Route path="/random-dog" element={<RandomDog />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
