import profile from '../../../public/images/profile.png'
const Header = () => {
    return (
        <header className='flex items-center justify-between max-w-8xl mx-auto mb-11 py-5 bg-slate-400'>
            <h1 className='text-4xl font-bold ml-28 text-red-600'>John Wick Chapter 4</h1>
            <div className='mr-28'>
            <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;