"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ChevronRight, Star, MapPin, Clock, Phone, Share2, Navigation, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data
const MOCK_REVIEWS = [
  { id: 1, user: "Rahul S.", rating: 5, date: "2 days ago", text: "Excellent service! Highly recommended." },
  { id: 2, user: "Priya M.", rating: 4, date: "1 week ago", text: "Good experience overall, slightly expensive but worth it." },
  { id: 3, user: "Amit K.", rating: 5, date: "3 weeks ago", text: "Very professional and timely." }
];

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-24 md:pb-0">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/search/salons" className="hover:text-blue-600">Salons</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-slate-900 font-bold truncate">Urban Style Salon</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          
          {/* Image Gallery (Mock Grid instead of complex carousel for now) */}
          <div className="grid grid-cols-4 grid-rows-2 gap-1 h-64 md:h-[400px]">
            <div className="col-span-4 md:col-span-2 row-span-2 bg-slate-200 relative group overflow-hidden">
              <img src="https://placehold.co/800x600/1e3a8a/ffffff?text=Main+Photo" alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="hidden md:block col-span-1 row-span-1 bg-slate-200 relative overflow-hidden"><img src="https://placehold.co/400x300/f97316/ffffff?text=Photo+2" className="w-full h-full object-cover" /></div>
            <div className="hidden md:block col-span-1 row-span-1 bg-slate-200 relative overflow-hidden"><img src="https://placehold.co/400x300/1e3a8a/ffffff?text=Photo+3" className="w-full h-full object-cover" /></div>
            <div className="hidden md:block col-span-1 row-span-1 bg-slate-200 relative overflow-hidden"><img src="https://placehold.co/400x300/f97316/ffffff?text=Photo+4" className="w-full h-full object-cover" /></div>
            <div className="hidden md:block col-span-1 row-span-1 bg-slate-200 relative overflow-hidden group cursor-pointer">
              <img src="https://placehold.co/400x300/1e3a8a/ffffff?text=Photo+5" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-lg bg-black/40 hover:bg-black/60 transition-colors">+12 Photos</div>
            </div>
          </div>

          {/* Business Info Header */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
                <span className="text-slate-500 text-sm font-medium">Beauty & Spa</span>
              </div>
              
              <h1 className="text-3xl font-extrabold text-slate-900">Urban Style Premium Salon</h1>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-600 text-white font-bold px-2 py-1 rounded text-sm flex items-center">
                  4.8 <Star className="w-4 h-4 ml-1 fill-current" />
                </div>
                <span className="text-slate-500 font-medium">1,245 Ratings</span>
              </div>
              
              <div className="space-y-2 text-slate-600 font-medium">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 text-slate-400 mt-0.5" /> 
                  Shop 14, Ground Floor, Phoenix Mall, Lower Parel, Mumbai, Maharashtra 400013
                </p>
                <p className="flex items-center gap-2 text-green-600 font-bold">
                  <Clock className="w-5 h-5 shrink-0 text-slate-400" /> 
                  Open Now <span className="text-slate-500 font-normal ml-2">10:00 AM - 9:00 PM</span>
                </p>
              </div>
            </div>

            {/* Desktop Action Box */}
            <div className="hidden md:flex flex-col gap-3 min-w-[250px]">
              <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-lg"><Phone className="mr-2 h-5 w-5"/> +91 98765 43210</Button>
              <Button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg"><CalendarCheck className="mr-2 h-5 w-5"/> Book Now</Button>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 font-bold"><Navigation className="mr-2 h-4 w-4"/> Direction</Button>
                <Button variant="outline" className="flex-1 font-bold"><Share2 className="mr-2 h-4 w-4"/> Share</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-slate-200 hide-scrollbar">
            {["Overview", "Services & Pricing", "Photos", "Reviews"].map(tab => {
              const tabId = tab.toLowerCase().replace(/ /g, '-').replace('&-', '');
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`px-6 py-4 font-bold whitespace-nowrap transition-colors ${activeTab === tabId ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          
          <div className="p-6 md:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">About the Business</h3>
                  <p className="text-slate-600 leading-relaxed">Urban Style Premium Salon is Mumbai's top destination for luxury hair and beauty treatments. Established in 2015, our expert stylists use only premium products to ensure you get the perfect look.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Location</h3>
                  <div className="h-48 bg-slate-200 rounded-xl flex items-center justify-center border border-slate-300">
                    <span className="text-slate-500 font-bold flex items-center gap-2"><MapPin/> Map Placeholder</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services-pricing' && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Popular Services</h3>
                <div className="space-y-4">
                  {[
                    { name: "Premium Haircut & Styling", price: "₹800" },
                    { name: "Keratin Treatment", price: "₹4,500" },
                    { name: "Luxury Spa Pedicure", price: "₹1,200" }
                  ].map((service, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                      <span className="font-medium text-slate-800">{service.name}</span>
                      <span className="font-bold text-slate-900">{service.price}</span>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4 text-blue-600 font-bold border-blue-200 hover:bg-blue-50">View Full Menu</Button>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
                  <Button variant="outline" className="font-bold border-slate-300 text-slate-700">Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {MOCK_REVIEWS.map(review => (
                    <div key={review.id} className="border-b border-slate-100 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">{review.user.charAt(0)}</div>
                          <div>
                            <div className="font-bold text-slate-900">{review.user}</div>
                            <div className="text-xs text-slate-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({length: 5}).map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-orange-500 text-orange-500' : 'fill-slate-200 text-slate-200'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 mt-3">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'photos' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className="bg-slate-200 aspect-square rounded-lg overflow-hidden">
                     <img src={`https://placehold.co/400x400/1e3a8a/ffffff?text=Gallery+${i+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex gap-2 z-50">
        <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold h-12"><Phone className="h-5 w-5"/></Button>
        <Button className="flex-2 bg-orange-500 hover:bg-orange-600 text-white font-bold h-12"><CalendarCheck className="mr-2 h-5 w-5"/> Book Now</Button>
        <Button variant="outline" className="flex-1 font-bold h-12 border-slate-200"><Navigation className="h-5 w-5 text-blue-600"/></Button>
      </div>
    </div>
  );
}
