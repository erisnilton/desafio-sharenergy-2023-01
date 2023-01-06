import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/navbar";
import theme from "./theme";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomUser from "./pages/random-user";
import HttpCat from "./pages/http-cat";
import RandomDog from "./pages/random-dog";
import Customer from "./pages/customer";

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<RandomUser />} />
          <Route path="/http-cat" element={<HttpCat />} />
          <Route path="/random-dog" element={<RandomDog />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
