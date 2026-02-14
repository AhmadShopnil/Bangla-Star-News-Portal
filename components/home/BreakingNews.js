
import Link from 'next/link';
import Container from '../common/Container';

const BreakingNews = ({ news = [] }) => {
    if (!news || news.length === 0) return null;

    return (
        <div className="bg-white  py-2 overflow-hidden  ">
            <Container className="flex items-center">
                {/* Label */}
                <div className="flex items-center gap-2 bg-black text-white px-3 py-1 text-xs font-black whitespace-nowrap z-10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 bg-primary"></span>
                    </span>
                    শীর্ষ সংবাদ
                </div>

                {/* Ticker Content */}
                <div className="relative flex-1 overflow-hidden ml-4">
                    <div className="flex animate-ticker whitespace-nowrap hover:pause">
                        {news.map((item, idx) => (
                            <span key={item.id} className="flex items-center text-sm font-medium text-gray-800">
                                <Link href={`/news/${item.slug}`} className="hover:text-primary transition-colors">
                                    {item.title}
                                </Link>
                                {idx !== news.length - 1 && (
                                    <span className="mx-6 text-primary">|</span>
                                )}
                            </span>
                        ))}
                        {/* Repeat for continuous scroll effect if list is short */}
                        {news.length < 5 && news.map((item, idx) => (
                            <span key={`repeat-${item.id}`} className="flex items-center text-sm font-medium text-gray-800">
                                <span className="mx-6 text-primary">|</span>
                                <Link href={`/news/${item.slug}`} className="hover:text-primary transition-colors hover:font-semibold">
                                    {item.title}
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BreakingNews;
