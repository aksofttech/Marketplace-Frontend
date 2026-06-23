"use client";

import Link from "next/link";
import { Filter, MapPin, Star, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocationStore } from "@/store/useLocationStore";
import { useListings, Listing } from "@/hooks/useListings";

interface SearchResultsClientProps {
  category: string;
  title: string;
}

export function SearchResultsClient({ category, title }: SearchResultsClientProps) {
  const { lat, lng } = useLocationStore();
  const { data, isLoading, error } = useListings(category, lat, lng);

  const formatDistance = (meters?: number) => {
    if (meters === undefined) return "N/A";
    if (meters < 1000) return `${Math.round(meters)} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  };

  const getTags = (listing: Listing) => {
    const tags = [];
    if (listing.is_featured) tags.push("Featured");
    if (listing.average_rating >= 4.0) tags.push("Top Rated");
    return tags.length > 0 ? tags : ["Verified"];
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
      {/* Mobile Filter Bar */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        <Button variant="outline" size="sm" className="shrink-0"><Filter className="w-4 h-4 mr-2" /> Filters</Button>
        <Button variant="outline" size="sm" className="shrink-0">4.0+ Ratings</Button>
        <Button variant="outline" size="sm" className="shrink-0">Nearest</Button>
        <Button variant="outline" size="sm" className="shrink-0">Open Now</Button>
      </div>

      {/* Sidebar Filters (Desktop) */}
      <div className="hidden md:block w-1/4 shrink-0">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-36">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Rating</h4>
              <div className="space-y-2">
                {["4.0+", "3.0+", "Any"].map(rating => (
                  <label key={rating} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                    <input type="radio" name="rating" className="accent-orange-500" />
                    {rating} Stars
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Distance</h4>
              <div className="space-y-2">
                {["< 1 km", "< 5 km", "< 10 km", "Anywhere"].map(dist => (
                  <label key={dist} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                    <input type="radio" name="dist" className="accent-orange-500" />
                    {dist}
                  </label>
                ))}
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Filters</Button>
          </div>
        </div>
      </div>

      {/* Main Listing Grid */}
      <div className="w-full md:w-3/4 space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900 capitalize">{title}</h1>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm h-full animate-pulse">
                <div className="h-48 bg-slate-200 w-full" />
                <div className="p-4 space-y-4">
                  <div className="h-6 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-1/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-5/6" />
                  </div>
                  <div className="flex gap-2 pt-3">
                    <div className="h-10 bg-slate-200 rounded flex-1" />
                    <div className="h-10 bg-slate-200 rounded flex-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!isLoading && error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-xl border border-red-100 text-center">
            <h3 className="font-bold text-lg mb-2">Error loading results</h3>
            <p>We couldn't fetch the businesses right now. Please try again later.</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && data?.items.length === 0 && (
          <div className="bg-white p-10 rounded-xl border border-slate-200 text-center flex flex-col items-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No businesses found near your location</h3>
            <p className="text-slate-500 mb-6 max-w-md">
              We couldn't find any {title.toLowerCase()} in your immediate area. Try expanding your search radius or checking another location.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Expand Search Radius
            </Button>
          </div>
        )}

        {/* Success State */}
        {!isLoading && !error && data && data.items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {data.items.map((biz) => (
              <Link href={`/business/${biz.slug || biz.id}`} key={biz.id} className="block group">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
                  <div className="relative h-48 bg-slate-200 overflow-hidden">
                    {/* Fallback image if image_url is missing */}
                    <img 
                      src={biz.image_url || `https://placehold.co/400x300/1e3a8a/ffffff?text=${biz.title.charAt(0)}`} 
                      alt={biz.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {getTags(biz).map(tag => (
                        <span key={tag} className={`text-xs font-bold px-2 py-1 rounded ${tag === 'Featured' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {biz.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <div className="bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                        {biz.average_rating ? biz.average_rating.toFixed(1) : "New"} 
                        {biz.average_rating > 0 && <Star className="w-3 h-3 ml-0.5 fill-current" />}
                      </div>
                      <span className="text-sm text-slate-500">
                        ({biz.total_reviews} Ratings)
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 text-sm text-slate-600 mb-4 flex-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 shrink-0 text-slate-400" /> 
                        <span className="truncate">{biz.address || `${biz.city}, ${biz.state}`}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 ml-5">
                        {lat && lng && biz.distance !== undefined ? (
                          <span className="font-medium text-slate-700">{formatDistance(biz.distance)} away</span>
                        ) : (
                          <span>Distance unknown</span>
                        )}
                        <span className="mx-1">•</span> 
                        <span className={biz.is_open_now ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
                          {biz.is_open_now ? "Open Now" : "Closed"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-3 border-t border-slate-100">
                      <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold h-10">
                        <Phone className="w-4 h-4 mr-2" /> Call Now
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold h-10">
                        <MessageSquare className="w-4 h-4 mr-2" /> Enquire
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
