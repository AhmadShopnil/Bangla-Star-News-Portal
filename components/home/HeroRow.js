
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
const HeroRow = ({ mainNews, bottomNews = [] }) => {
    if (!mainNews) return null;

    return (
        <Container className=" ">
            <div className='border-t border-gray-400 pb-3'>

            </div>
            {/* Top Featured Story */}
            <div className=" px-6 py-2 border-r-2 border-l-4 border-l-blue-800 border-gray-300 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Text Side */}
                    <div className="md:col-span-6 flex flex-col justify-between">
                     <div>
                           <Link href={`/news/${mainNews.slug}`} className="group">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-[1.15]
                             group-hover:text-primary transition-colors">
                                {mainNews.title}
                            </h1>
                        </Link>
                        <p className="text-gray-600 text-lg leading-relaxed mt-2 md:mt-3 ">
                            {mainNews.summary}
                        </p>
                        {/* <div className="flex items-center gap-4 text-sm text-gray-500 font-bold uppercase">
                            <span className="text-primary">{mainNews.category}</span>
                            <span>{mainNews.time}</span>
                        </div> */}
                     </div>
                        <div className="flex gap-2 pt-4">
                            <div className="px-3 py-1 bg-gray-100 text-xs font-bold text-gray-600">জাতীয়</div>
                            <div className="px-3 py-1 bg-gray-100 text-xs font-bold text-gray-600">রাজনীতি</div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="md:col-span-6">
                        <Link href={`/news/${mainNews.slug}`} className="block relative h-[250px] md:h-[300px] w-full overflow-hidden">
                            <Image
                                src={mainNews.image}
                                alt={mainNews.title}
                                fill
                                priority
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Grid Below Hero */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {bottomNews.map((news) => (
                    <Link key={news.id} href={`/news/${news.slug}`} className="group bg-white p-3 border border-transparent hover:border-gray-200 hover:shadow-md transition-all">
                        <div className="relative h-40 w-full mb-3 overflow-hidden">
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-md font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-3">
                            {news.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-gray-500 uppercase">
                            <span className="text-primary">{news.category}</span>
                            <span>{news.time}</span>
                        </div>
                    </Link>
                ))}
            </div> */}
        </Container>
    );
};

export default HeroRow;
