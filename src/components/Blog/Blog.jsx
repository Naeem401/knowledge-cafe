
import { CiBookmarkPlus } from "react-icons/ci";
const Blog = ({blog, handleAddToBookmark, handleMarksAsRead}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-8 pb-8 border-b-2">
            <img className="w-full mb-8 rounded-lg" src={cover} alt="" />
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-6">
                    <img className="w-14 rounded-lg" src={author_img} alt="" />
                    <div>
                        <h2 className="font-bold text-[18px] md:text-2xl text-[#111111]">{author}</h2>
                        <p className="font-semibold text-[12px] md:text-base text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 font-medium text-base md:text-xl text-[#11111199]">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    ><CiBookmarkPlus /></button>
                </div>
            </div>
            <h2 className="font-bold text-2xl md:text-4xl text-[#111111] mb-4">{title}</h2>
            <p className="font-medium text-base md:text-xl text-[#11111199] mb-5">
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className="ml-2" href="">#{hash}</a> </span>)
                }
            </p>
            <button  onClick={()=>handleMarksAsRead(id, reading_time)} className="font-semibold text-base md:text-xl text-[#6047EC] border-b-2">Mark as read</button>
        </div>
    );
};

export default Blog;