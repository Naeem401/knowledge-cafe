import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center p-4 md:py-7 border-b-2'>
                <h2 className="font-bold text-2xl md:text-[40px] text-[#111111]">Knowledge Cafe</h2>
                <img src={profile} alt="" />
            </nav>
        </div>
    );
};

export default Header;