import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className=" p-4 md:w-2/3">
            {
                blogs.map(blog => <Blog
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarksAsRead={handleMarksAsRead}
                    blog={blog}
                key = {blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;