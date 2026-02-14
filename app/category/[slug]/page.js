
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BreakingNews from '@/components/home/BreakingNews';
import MediumCard from '@/components/news/MediumCard';
import { getNews, getBreakingNews, getCategories } from '@/lib/api';
import Container from '@/components/common/Container';

export async function generateMetadata({ params }) {
    const categories = await getCategories();
    const category = categories.find(c => c.slug === params.slug);
    return {
        title: `${category ? category.name : 'বিভাগ'} | বাংলা স্টার নিউজ`,
    };
}

export default async function CategoryPage({ params }) {
    const { slug } = params;
    const categories = await getCategories();
    const category = categories.find(c => c.slug === slug);
    const breakingNews = await getBreakingNews();
    const allNews = await getNews();

    // Filter news by category name (mock)
    const categoryNews = allNews.filter(n =>
        n.category.toLowerCase() === (category ? category.name.toLowerCase() : '') ||
        // Simple mapping for this mock
        (slug === 'national' && n.category === 'জাতীয়') ||
        (slug === 'politics' && n.category === 'রাজনীতি') ||
        (slug === 'international' && n.category === 'আন্তর্জাতিক') ||
        (slug === 'sports' && n.category === 'খেলা') ||
        (slug === 'entertainment' && n.category === 'বিনোদন') ||
        (slug === 'lifestyle' && n.category === 'লাইফস্টাইল') ||
        (slug === 'technology' && n.category === 'তথ্যপ্রযুক্তি') ||
        (slug === 'economics' && n.category === 'অর্থনীতি')
    );

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <BreakingNews news={breakingNews} />

            <main className="py-12">
                <Container>
                    <div className="mb-10 flex items-center gap-4">
                        <div className="w-2 h-10 bg-primary"></div>
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {category ? category.name : 'বিভাগ'}
                        </h1>
                    </div>

                    {categoryNews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryNews.map((news) => (
                                <MediumCard key={news.id} news={news} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white p-12 text-center shadow-sm">
                            <h2 className="text-xl font-bold text-gray-800">বর্তমানে এই বিভাগে কোনো সংবাদ নেই।</h2>
                            <p className="text-gray-500 mt-2">অন্যান্য বিভাগগুলো দেখুন।</p>
                        </div>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}
