const Navbar = () => {
    return (
        <div className=" h-20 text-white flex px-6 py-2 bg-themeBlack">

            <div className="h-24 bg-themeBlack px-3 flex justify-center items-center">
                <span><img src="/public/logo-2.png" className="w-20" alt="" /></span>
            </div>

            <div className="flex-1 items-end flex flex-col justify-center gap-y-5">
                <ul className="flex gap-5 md:gap-10">
                    <span>Facebook</span>
                    <span>Instagram</span>
                </ul>
                    <ul className="text-white flex gap-5 md:gap-10">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
            </div>

        </div>
    );
};

export default Navbar;