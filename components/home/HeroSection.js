
// import MainCard from '../news/MainCard';
// import HorizontalCard from '../news/HorizontalCard';
// import Container from '../common/Container';

// const HeroSection = ({ mainNews, sideNews = [] }) => {
//     return (
//         <Container className="mt-8">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                 {/* Main News */}
//                 <div className="lg:col-span-8">
//                     <MainCard news={mainNews} />
//                 </div>

//                 {/* Sidebar News */}
//                 <div className="lg:col-span-4 bg-white shadow-sm p-4 overflow-hidden border border-gray-100">
//                     <h2 className="text-xl font-bold mb-4 border-b pb-2 flex items-center gap-2">
//                         <span className="w-2 h-6 bg-primary inline-block"></span>
//                         সদ্য সংবাদ
//                     </h2>
//                     <div className="divide-y divide-gray-50">
//                         {sideNews.map(news => (
//                             <HorizontalCard key={news.id} news={news} />
//                         ))}
//                     </div>
//                     <button className="w-full mt-4 py-2 text-primary font-bold text-sm hover:bg-red-50 transition-colors border border-primary/20">
//                         সব খবর দেখুন
//                     </button>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default HeroSection;
