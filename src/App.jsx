import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = blog => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  };
const [readingTime, setReadingTime] = useState(0)
const handleMarksAsRead = (id, time) => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}
  return (
    <>
      
     <Header></Header>
     <div className='flex flex-col md:flex-row gap-6 mt-8'>
     <Blogs handleAddToBookmark={handleAddToBookmark}
     handleMarksAsRead={handleMarksAsRead}
     ></Blogs>
     <Bookmarks bookmarks={bookmarks}
     readingTime={readingTime}
     ></Bookmarks>
     </div>
     
      
    </>
  )
}

export default App
