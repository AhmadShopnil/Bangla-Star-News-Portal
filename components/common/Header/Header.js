
import Logo from './Logo';
import DateTime from '../DateTime';
import Search from '../Search';
import Navbar from './Navbar';
import Container from '../Container';
import TrendingBar from './TrendingBar';
import HeaderActions from './HeaderActions';
import BreakingNews from '@/components/common/Header/BreakingNews';
import { getBreakingNews } from '@/lib/api';

const Header = async() => {
    const breakingNews = await getBreakingNews();

    return (
        <header className="w-full sticky top-0 z-50 ">
            {/* Top Thick Red Bar (Matching Fox style) */}
            {/* <div className=" h-1.5 w-full"></div> */}

            {/* Main Section with Logo and Nav items */}
            <div className="bg-secondary text-white py-0">
                <Container className="flex items-center justify-between min-h-[50px] relative">
                    <div className="flex items-start ">
                        {/* Logo Container - Absolute Positioned to Overlap */}
                        <div className="absolute top-[9px] left-0 md:left-6 z-[70]">
                            <Logo />
                        </div>

                        {/* Empty spacer for the logo on desktop */}
                        <div className="w-[120px] lg:w-[50px] hidden md:block"></div>

                        {/* Navigation Items (Managed by Navbar now) */}
                        <Navbar />
                    </div>
                <HeaderActions/>
                 
                </Container>
            </div>

            {/* Row 2 Breakeing news */}
            <BreakingNews news={breakingNews} />
            {/* <TrendingBar /> */}
        </header>
    );
};

export default Header;
