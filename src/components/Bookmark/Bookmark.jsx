

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-5 bg-white mt-4 rounded-lg">
            <h2 className="font-semibold text-[18px] text-[#111111]">{title}</h2>
        </div>
      
        
    );
};

export default Bookmark;