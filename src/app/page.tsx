import { CATEGORIES, getCategoryBySlug } from "@/config/categories";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FooterDirectory } from "@/components/home/FooterDirectory";

// Helpers to get groups
const getCats = (slugs: string[]) => slugs.map(getCategoryBySlug).filter(Boolean) as typeof CATEGORIES;

export default function HomePage() {
  const topCategories = getCats([
    "restaurants", "hotels", "beauty-spa", "home-decor", "wedding-planning", 
    "education", "rent-hire", "hospitals", "contractors", "pet-shops", 
    "pg-hostels", "estate-agent", "dentists", "gym", "loans", 
    "event-organisers", "dining", "packers-movers", "courier-service"
  ]);

  const weddingCats = getCats(["banquet-halls", "bridal-requisite", "caterers"]);
  const beautyCats = getCats(["beauty-parlours", "spa-massages", "salons"]);
  const repairCats = getCats(["ac-service", "car-service", "bike-service"]);
  const dailyNeedsCats = getCats(["movies", "grocery", "electricians"]);
  const billsCats = getCats(["mobile-recharge", "electricity-bill", "dth-recharge", "water-bill", "gas-bill", "insurance"]);
  const travelCats = getCats(["flight-booking", "bus-booking", "train-booking", "hotel-booking", "car-rentals"]);
  
  // Trending Searches & Sunny Day (Custom mapped or existing)
  const trendingCats = getCats(["pg-accommodations", "water-parks", "cinema-halls", "water-suppliers"]);
  const sunnyDayCats = getCats(["water-suppliers", "water-tank-cleaning", "waterproofing", "refrigerator-dealers"]);
  const popularCats = getCats(["estate-agent", "interior-designers", "real-estate-agents", "banquet-halls", "car-rentals"]); // some placeholders

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        
        <div className="container mx-auto px-4 md:px-0 py-8 space-y-10">
          
          {/* 1. Top Categories (Grid) */}
          <CategoryGrid 
            title="Top Categories" 
            categories={topCategories} 
            variant="grid" 
          />

          {/* 2. Grouped Sub-Category Blocks (3-column layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <CategoryGrid title="💒 Wedding Requisites" categories={weddingCats} variant="scroll" />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <CategoryGrid title="💆 Beauty & Spa" categories={beautyCats} variant="scroll" />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <CategoryGrid title="🔧 Repairs & Services" categories={repairCats} variant="scroll" />
            </div>
          </div>

          {/* 3. Utility & Travel Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
               <CategoryGrid title="📱 Bills & Recharge" categories={billsCats} variant="grid" />
            </div>
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
               <CategoryGrid title="✈️ Travel Bookings" categories={travelCats} variant="grid" />
            </div>
          </div>

          {/* 4. Horizontal Scrolling Carousels */}
          <CategoryGrid title="🔍 Trending Searches Near You" categories={trendingCats} variant="scroll" />
          <CategoryGrid title="☀️ Sunny Day Essentials" categories={sunnyDayCats} variant="scroll" />
          <CategoryGrid title="🔎 Popular Searches" categories={popularCats.length > 0 ? popularCats : trendingCats} variant="scroll" />

          {/* 5. Recent Activity (Mock Data) */}
          <section className="py-6 border-t border-slate-200 mt-12">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">📋 Recent Activity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Amruta More Hair Salon", "Upadhyay Astrology", "Laxmi Digital Photo", "Unique Educare", "Zxy Deal Super Six", "Icit Computer Institute"].map((name, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all">
                  <div className="w-16 h-16 rounded-lg bg-slate-200 shrink-0 overflow-hidden">
                    <img src={`https://placehold.co/100x100/e2e8f0/475569?text=${name.charAt(0)}`} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{name}</h3>
                    <div className="flex items-center text-orange-500 text-xs mt-1">
                      ★ ★ ★ ★ ☆ <span className="text-slate-500 ml-1">(2{i} Reviews)</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 truncate">Mumbai, Maharashtra</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. JD Guides & Articles */}
          <section className="py-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">📖 Guides & Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex cursor-pointer hover:shadow-md">
                <div className="w-1/3 bg-slate-200">
                   <img src="https://placehold.co/300x200/1e3a8a/ffffff?text=Gold" alt="Gold Rate" className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className="text-xs font-bold text-blue-600 mb-1">FINANCE</span>
                  <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug">Platinum Rate Today: Market Trends & Analysis</h3>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex cursor-pointer hover:shadow-md">
                <div className="w-1/3 bg-slate-200">
                  <img src="https://placehold.co/300x200/f97316/ffffff?text=Food" alt="Restaurants" className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className="text-xs font-bold text-orange-500 mb-1">LIFESTYLE</span>
                  <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug">Best Restaurants in Mumbai During Monsoon</h3>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </main>

      <FooterDirectory />
    </div>
  );
}
