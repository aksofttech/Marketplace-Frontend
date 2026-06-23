import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationCombobox } from "@/components/shared/LocationCombobox";

export function HeroBanner() {
  const quickFilters = ["Near Me", "Top Rated", "Open Now", "24x7 Services"];

  return (
    <section className="relative w-full bg-slate-900 py-16 md:py-24 overflow-hidden rounded-none md:rounded-b-3xl">
      {/* Background with Gradient & Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Find <span className="text-orange-500">Anything</span>, <span className="text-blue-400">Anywhere</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            Search across 50+ products & services. Compare and book instantly.
          </p>
        </div>

        {/* Massive Search Bar */}
        <div className="w-full max-w-4xl bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2">
          <div className="w-full md:w-1/3 flex items-center px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <MapPin className="h-5 w-5 text-orange-500 shrink-0 mr-3" />
            <div className="w-full h-full flex items-center">
              <LocationCombobox />
            </div>
          </div>
          <div className="w-full md:w-flex-1 flex flex-1 items-center px-4 py-3 md:py-2">
            <Search className="h-5 w-5 text-blue-500 shrink-0 mr-3" />
            <input 
              type="text" 
              placeholder="Search for restaurants, hotels, plumbers..." 
              className="w-full outline-none text-slate-900 bg-transparent placeholder:text-slate-400 text-base md:text-lg"
            />
          </div>
          <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-xl md:rounded-full px-8 py-6 md:py-6 text-base font-bold shadow-lg transition-transform hover:scale-[1.02]">
            Search Now
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {quickFilters.map((filter) => (
            <span 
              key={filter} 
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium backdrop-blur-sm cursor-pointer transition-colors"
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
