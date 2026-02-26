
import Link from 'next/link';
import MediumCard from '../news/MediumCard';
import Image from 'next/image';
import Container from '../common/Container';

const ThumbnailNewsSection = ({ news = [] ,title}) => {
    if (!news || news.length === 0) return null;

    return (
        <Container >
            <div className=" ">
                <div className="flex items-center justify-between   border-b border-gray-100 pb-4">
                    <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-3 text-secondary">
                        <span className="w-2 h-8 bg-secondary"></span>
                        {title} 
                    </h2>
                    <a href="#" className="text-base md:text-xl text-secondary font-bold hover:underline tracking-tight">সবগুলো দেখুন</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {news.slice(0, 4)?.map((item, index) => (
                        <Link key={item.id} href={`/news/${item.slug}`} className="group flex flex-col gap-1 md:gap-2 ">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* <div className="absolute top-2 left-2 bg-primary text-white w-8 h-8 flex items-center justify-center font-black text-lg shadow-lg">
                                    {index + 1}
                                </div> */}
                            </div>
                            <h3 className="text-gray-600 text-base md:text-[22px] leading-[28px] group-hover:text-primary font-semibold transition-colors line-clamp-2">
                                {item.title}
                            </h3>
                              <p className="text-gray-500 text-base md:text-xl line-clamp-2 leading-relaxed ">
                            {item.summary}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ThumbnailNewsSection;
