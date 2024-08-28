import { FC } from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PostIdPage from "../pages/PostIdPage";
import NodeJS from "../pages/NodeJS";
import SearchResults from "../pages/SearchResults";
import SignIn from "../pages/SignIn";
import AdminPage from "../pages/AdminPage";
import AddNewPost from "../pages/AddNewPost";
import EditPost from "../pages/EditPost";
import Register from "../pages/Register";
 
const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<NodeJS/>}/>
            <Route path="/posts" element={<Home/>}/>
            <Route path="/posts/:_id" element={<PostIdPage/>}/>
            <Route path="posts/search" element={<SearchResults/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin/login" element={<SignIn/>}/>
            <Route path="/admin/register" element={<Register/>}/>
            <Route path="/admin/dashboard" element={<AdminPage/>}/>
            <Route path="/add-new-post" element={<AddNewPost/>}/>
            <Route path="/edit-post/:_id" element={<EditPost/>}/>
        </Routes>
    );
}
 
export default Router;