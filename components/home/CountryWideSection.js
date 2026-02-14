
import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

const CountryWideSection = ({ title, featureNews, gridNews = [] }) => {
    if (!featureNews) return null;

    return (
        <Container >
            <div className=" p-6 border border-gray-300  ">

                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary"></div>
                        <h2 className="text-2xl font-black text-gray-900">{title}</h2>
                    </div>
                    <Link href={`/category/national`} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                        আরও খবর
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </Link>
                </div>

                {/* Featured Big Story */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-gray-50">
                    <div className="md:col-span-6">
                        <Link href={`/news/${featureNews.slug}`} className="block relative h-[250px] md:h-[350px] w-full overflow-hidden">
                            <Image
                                src={featureNews.image}
                                alt={featureNews.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </Link>
                    </div>
                    <div className="md:col-span-6 flex flex-col justify-start">
                        <Link href={`/news/${featureNews.slug}`} className="group">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors mb-4">
                                {featureNews.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                            {featureNews.summary}
                        </p>
                        <div className="mt-6 text-sm font-bold text-gray-400 uppercase tracking-wider">
                            {featureNews.date} | {featureNews.time}
                        </div>
                    </div>
                </div>

                {/* Bottom Grid of 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gridNews.slice(0, 4).map((news) => (
                        <Link key={news.id} href={`/news/${news.slug}`} className="group">
                            <div className="relative h-44 w-full mb-3 overflow-hidden bg-gray-100">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h4 className="text-md font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-3">
                                {news.title}
                            </h4>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CountryWideSection;
