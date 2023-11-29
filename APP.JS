//APP.JS

import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Books from './Books';
import AddBook from './AddBook';
import BookDetails from './BookDetails';
import Removebooks from './RemoveBooks';

function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<Register />}>UserRegistration</Route>
    <Route path="/Login" element={<Login />}>UserLogin</Route>
    <Route path="/Navbar" element={<Navbar />}>Navbar</Route>
    <Route path="/Books" element={<Books />}>Books</Route>
    <Route path="/AddBook" element={<AddBook />}>AddBook</Route>
    <Route path="/BookDetails" element={<BookDetails />}>BookDetails</Route>
    
    <Route path="/RemoveBooks" element={<Removebooks />}>RemoveBooks</Route>
  </Routes>
  </>
  );
}

export default App;
