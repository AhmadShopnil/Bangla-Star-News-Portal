
import Link from 'next/link';
import Container from './Container';


const trendingTopics = [
    { id: 1, name: "নির্বাচন", slug: "/search?q=guthrie" },
    { id: 2, name: "বাজেট ২০৫", slug: "/search?q=olympics" },
    { id: 3, name: "ক্রিকেট", slug: "/search?q=minnesota" },
    { id: 4, name: "আবহাওয়া", slug: "/search?q=iran" },
];



const TrendingBar = () => {
    return (
        <div className="bg-white border-b border-gray-200 py-3.5 hidden md:block">
            <Container className="flex items-center justify-between relative">
                <div className="flex items-center gap-4 ml-[120px] lg:ml-[150px]">
                    <span className="text-[#EE1D23] font-black text-[11px] uppercase tracking-widest">Trending</span>
                    <div className="h-3 w-[1px] bg-gray-300 mx-2"></div>
                    <div className="flex items-center gap-6">
                        {trendingTopics.map((topic) => (
                            <Link
                                key={topic.id}
                                href={topic.slug}
                                className="text-[#003366] font-black text-[11px] hover:text-[#EE1D23] transition-colors uppercase tracking-tight"
                            >
                                {topic.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">

                </div>
            </Container>
        </div>
    );
};


export default TrendingBar;
