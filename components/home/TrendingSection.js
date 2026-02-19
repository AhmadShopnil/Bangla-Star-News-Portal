
import Link from 'next/link';
import MediumCard from '../news/MediumCard';
import Image from 'next/image';
import Container from '../common/Container';

const TrendingSection = ({ news = [] }) => {
    if (!news || news.length === 0) return null;

    return (
        <Container >
            <div className="  p-8 border border-gray-300 shadow-xs ">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-black flex items-center gap-3">
                        <span className="w-2 h-8 bg-black"></span>
                        সবচেয়ে জনপ্রিয়
                    </h2>
                    <a href="#" className="text-sm text-primary font-bold hover:underline tracking-tight">সবগুলো দেখুন</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {news.slice(0, 4)?.map((item, index) => (
                        <Link key={item.id} href={`/news/${item.slug}`} className="group flex flex-col gap-4">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-primary text-white w-8 h-8 flex items-center justify-center font-black text-lg shadow-lg">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-md font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-3">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default TrendingSection;
