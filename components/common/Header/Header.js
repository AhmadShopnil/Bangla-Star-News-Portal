
import Logo from '../Logo';
import DateTime from '../DateTime';
import Search from '../Search';
import Navbar from '../Navbar';
import Container from '../Container';
import TrendingBar from '../TrendingBar';
import HeaderActions from './HeaderActions';

const Header = () => {
    return (
        <header className="w-full sticky top-0 z-50 ">
            {/* Top Thick Red Bar (Matching Fox style) */}
            {/* <div className=" h-1.5 w-full"></div> */}

            {/* Main Section with Logo and Nav items */}
            <div className="bg-[#003366] text-white py-0">
                <Container className="flex items-center justify-between min-h-[50px] relative">
                    <div className="flex items-center gap-4">
                        {/* Logo Container - Absolute Positioned to Overlap */}
                        <div className="absolute top-[6px] left-0 md:left-6 z-[70]">
                            <Logo />
                        </div>

                        {/* Empty spacer for the logo on desktop */}
                        <div className="w-[120px] lg:w-[150px] hidden md:block"></div>

                        {/* Navigation Items (Managed by Navbar now) */}
                        <Navbar />
                    </div>
                <HeaderActions/>
                    {/* <div className="flex items-center gap-4">
                        <Search />
                        <div className="hidden md:flex items-center gap-4">
                            <button className="text-white font-bold text-[13px] sm:text-sm md:text-lg  hover:underline">Log In</button>
                            <button className="bg-[#EE1D23] text-white px-4 py-1.5 font-bold text-sm hover:bg-red-700 transition-colors uppercase">
                                Watch TV
                            </button>
                        </div>
                    </div> */}
                </Container>
            </div>

            {/* Row 2: Trending Bar */}
            <TrendingBar />
        </header>
    );
};

export default Header;
