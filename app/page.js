
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BreakingNews from '@/components/home/BreakingNews';
import HeroRow from '@/components/home/HeroRow';
import CountryWideSection from '@/components/home/CountryWideSection';
import SpecialCategorySection from '@/components/home/SpecialCategorySection';
import TrendingSection from '@/components/home/TrendingSection';
import { getNews, getBreakingNews, getTrendingNews } from '@/lib/api';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import Container from '@/components/common/Container';

export default async function Home() {
  const allNews = await getNews();
  const breakingNews = await getBreakingNews();
  const trendingNews = await getTrendingNews();

  // Reference structure: 
  // Main featured (1) + Grid below it (4)
  const mainNews = allNews[0];
  const heroGridNews = allNews.slice(1, 5);

  // For CountryWide Section (National)
  const nationalMain = allNews[2];
  const nationalGrid = allNews.slice(0, 4);

  // Sports News (Title: খেলাধুলা)
  const sportsMain = allNews[3];
  const sportsSide = allNews.slice(0, 6);

  // Politics News (Title: রাজনীতি)
  const politicsMain = allNews[1];
  const politicsSide = allNews.slice(2, 8);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Header />
      <BreakingNews news={breakingNews} />
      {/* <HeroSection mainNews={mainNews} sideNews={heroGridNews} /> */}

      <main className="flex-grow pb-12 space-y-4">
        {/* Dynamic Hero Row matching reference */}
        <HeroRow mainNews={mainNews} bottomNews={heroGridNews} />
  <TrendingSection news={trendingNews} />
           {/* Politics Section */}
        <SpecialCategorySection
          title="রাজনীতি"
          mainNews={politicsMain}
          sideNews={politicsSide}
        />
        {/* Country Wide Section */}
        <CountryWideSection
          title="সারাদেশ"
          featureNews={nationalMain}
          gridNews={nationalGrid}
        />

        {/* Sports Section */}
        <SpecialCategorySection
          title="খেলাধুলা"
          mainNews={sportsMain}
          sideNews={sportsSide}
        />

        {/* Ad Space Placeholder */}
        <Container >
          <div className=" h-32 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center font-bold text-gray-400">
            ADVERTISEMENT
          </div>

        </Container>

   

        {/* Categories Section */}
        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <PremiumCategoryBlock title="জাতীয়" news={allNews.slice(0, 5)} />
            <PremiumCategoryBlock title="আন্তর্জাতিক" news={allNews.slice(3, 8)} />
          </div>
        </Container>

        {/* Trending / Popular Horizontal Carousel Style */}
      

        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PremiumCategoryBlock title="খেলাধুলা (অন্যান্য)" news={allNews.slice(1, 4)} vertical={true} />
            <PremiumCategoryBlock title="বিনোদন" news={allNews.slice(4, 7)} vertical={true} />
            <PremiumCategoryBlock title="অন্যান্য" news={allNews.slice(2, 5)} vertical={true} />
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

// Refined Category Block for premium feel
function PremiumCategoryBlock({ title, news, vertical = false }) {
  if (!news || news.length === 0) return null;
  const main = news[0];
  const others = news.slice(1);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-t-4 border-primary pt-3 mb-6">
        <h2 className="text-2xl font-black text-gray-900">{title}</h2>
        <a href="#" className="text-primary font-bold text-sm tracking-tighter">আরও পড়ুন</a>
      </div>

      <div className={`${vertical ? 'flex flex-col gap-6' : 'grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6'}`}>
        {/* Main Item in Category */}
        <div className="space-y-4 group">
          <div className="relative h-48 md:h-60 w-full overflow-hidden">
            <Image src={main.image} alt={main.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <a href={`/news/${main.slug}`} className="block">
            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {main.title}
            </h3>
          </a>
          {!vertical && (
            <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
              {main.summary}
            </p>
          )}
        </div>

        {/* Other Items in Category */}
        <div className="flex flex-col divide-y divide-gray-100">
          {others.map(item => (
            <a key={item.id} href={`/news/${item.slug}`} className="flex gap-4 py-3 group first:pt-0">
              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
