
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer';
import BreakingNews from '@/components/home/BreakingNews';
import MediumCard from '@/components/news/MediumCard';
import { searchNews, getBreakingNews } from '@/lib/api';
import Container from '@/components/common/Container';

export async function generateMetadata({ searchParams }) {
    const query = searchParams.q || '';
    return {
        title: `অনুসন্ধান: ${query} | বাংলা স্টার নিউজ`,
    };
}

export default async function SearchPage({ searchParams }) {
    const query = searchParams.q || '';
    const results = await searchNews(query);
    const breakingNews = await getBreakingNews();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <BreakingNews news={breakingNews} />

            <main className="py-12">
                <Container>
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-gray-900">
                            অনুসন্ধান ফলাফল: <span className="text-primary">"{query}"</span>
                        </h1>
                        <p className="text-gray-500 mt-2">মোট {results.length} টি সংবাদ পাওয়া গেছে।</p>
                    </div>

                    {results.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {results.map((news) => (
                                <MediumCard key={news.id} news={news} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-12 text-center shadow-sm">
                            <div className="text-6xl mb-4">🔍</div>
                            <h2 className="text-xl font-bold text-gray-800">কোনো ফলাফল পাওয়া যায়নি!</h2>
                            <p className="text-gray-500 mt-2">অনুগ্রহ করে ভিন্ন কিছু দিয়ে অনুসন্ধান করুন।</p>
                        </div>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}
