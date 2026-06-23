import Link from "next/link";
import { Search, MapPin, Menu, User, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationCombobox } from "@/components/shared/LocationCombobox";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo & Location (Left) */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-blue-900">Super<span className="text-orange-500">App</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer w-48">
            <MapPin className="h-4 w-4 text-orange-500 shrink-0" />
            <div className="flex-1">
              <LocationCombobox />
            </div>
          </div>
        </div>

        {/* Global Search (Center) */}
        <div className="flex-1 max-w-2xl hidden md:flex items-center">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600" />
            </div>
            <input
              type="text"
              className="block w-full p-3 pl-10 text-sm text-slate-900 border border-slate-200 rounded-full bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all outline-none"
              placeholder="Search for services, businesses, products..."
            />
            <button className="absolute inset-y-1 right-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Actions (Right) */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" className="hidden md:flex gap-2 text-slate-600 hover:text-blue-600 font-medium">
            <PlusCircle className="h-4 w-4" />
            List Business
          </Button>
          <Button variant="outline" size="icon" className="md:hidden rounded-full border-slate-200">
            <Search className="h-5 w-5 text-slate-600" />
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-sm px-4">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
