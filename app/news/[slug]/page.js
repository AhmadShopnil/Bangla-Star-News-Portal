
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer';
import BreakingNews from '@/components/common/Header/BreakingNews';
import ShareButtons from '@/components/news/ShareButtons';
import PrintButton from '@/components/news/PrintButton';
import FBComments from '@/components/news/FBComments';
import HorizontalCard from '@/components/news/HorizontalCard';
import { getNewsBySlug, getBreakingNews, getNews } from '@/lib/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import CopyButton from '@/components/news/CopyButton';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const news = await getNewsBySlug(slug);
    if (!news) return { title: 'Not Found' };

    return {
        title: `${news.title} | বাংলা স্টার নিউজ`,
        description: news.summary,
    };
}

export default async function NewsDetailPage({ params }) {
    const { slug } = await params;
    // console.log("slug from details page", slug)
    const news = await getNewsBySlug(slug);
    const breakingNews = await getBreakingNews();
    const allNews = await getNews();
    const latestNews = allNews.filter(n => n.slug !== slug).slice(0, 5);

    if (!news) {
        notFound();
    }

    // Get current URL for sharing
    // const fullUrl = `https://banglastar.com/news/${slug}`;
    const fullUrl = `/news/${slug}`;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
       

            <main className="py-2">
                <Container className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Main Content */}
                    <article className="lg:col-span-8 p-3 md:p-6 border border-gray-200 ">
                        <div className="space-y-6">
                            {/* Category and Date */}
                            <div className="flex items-center gap-4 text-base md:text-xl">
                                <span className="bg-primary text-white px-3 py-1 font-bold">{news.category}</span>
                                <span className="text-gray-500 font-medium">{news.date} | {news.time}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-[1] md:leading-6">
                                {news.title}
                            </h1>

                            {/* Author and Toolbar */}
                            <div className="flex flex-wrap items-center justify-between gap-4  border-y border-gray-100">
                                <div className="flex items-center gap-3">
                                    {/* <div className="w-10 h-10 bg-red-50 flex items-center justify-center text-primary font-bold text-lg">
                                        {news.author.charAt(0)}
                                    </div> */}
                                    <div>
                                        <p className="text-base md:text-xl font-bold text-gray-800">{news.author}</p>
                                        <p className="text-base md:text-xl text-gray-500">বিশেষ সংবাদদাতা</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShareButtons title={news.title} url={fullUrl} /> 
                                    <PrintButton />
                                     {/* <CopyButton url={fullUrl} /> */}
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden shadow-inner">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none text-base md:text-xl text-gray-800 leading-[1.8] font-medium space-y-6">
                                {/* Split content by newlines and wrap in paragraphs */}
                                {news?.content?.split('\n').map((para, i) => (
                                    <p key={i} className="mb-4">{para}</p>
                                ))}

                                {/* Mock additional content for visual length */}
                                <p>এ বিষয়ে আরও বিস্তারিত জানতে আমাদের সাথেই থাকুন। দেশ ও বিদেশের সর্বশেষ সব খবর সবার আগে পেতে বাংলা স্টার নিউজ-এর সোশ্যাল মিডিয়া পেজগুলোতে লাইক দিয়ে যুক্ত হন।</p>
                                <p>বাংলাদেশের অগ্রযাত্রায় আমরা আপনার গর্বিত অংশীদার। সারা দেশের মানুষের প্রাণের কথাগুলো সংবাদ আকারে সবার কাছে তুলে আনাই আমাদের মূল লক্ষ্য। কোনো সংবাদ সম্পর্কে আপনার কোনো অভিযোগ বা পরামর্শ থাকলে আমাদের জানাতে ভুলবেন না।</p>
                            </div>

                            {/* Share and Tags */}
                            {/* <div className="pt-12 border-t border-gray-100">
                                <ShareButtons title={news.title} url={fullUrl} />
                            </div> */}

                            {/* Comments Section */}
                            <FBComments url={fullUrl} />
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-6">
                        {/* Latest News */}
                        <div className="p-3 md:p-6  border border-gray-200">
                            <h2 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2 flex items-center gap-2">
                                <span className="w-2 h-6 bg-primary inline-block"></span>
                                আরো সংবাদ
                            </h2>
                            <div className="space-y-2">
                                {latestNews.map(item => (
                                    <HorizontalCard key={item.id} news={item} />
                                ))}
                            </div>
                            <button className="w-full mt-6 py-2 text-primary font-bold text-base md:text-xl bg-red-50 hover:bg-red-100 transition-colors">
                                সব খবর পড়ুন
                            </button>
                        </div>

                        {/* Ad Placeholder */}
                        <div className="bg-gray-100 h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">বিজ্ঞাপন / Advertisement</span>
                        </div>
                    </aside>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
