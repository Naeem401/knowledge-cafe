import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="bg-[#6047EC1A] mb-6 p-5 text-center rounded-lg">
            <h2 className="font-bold text-2xl text-[#6047EC]">Spent time on read : {readingTime} min</h2>
        </div>
        <div className="w-full p-7 bg-[#1111110D] rounded-lg">
            <h2 className="font-bold text-2xl text-[#111111] text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
        </div>
        </div>
        
    );
};

export default Bookmarks;