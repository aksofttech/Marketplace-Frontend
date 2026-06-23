import Link from "next/link";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import { getCategoryBySlug } from "@/config/categories";
import { SearchResultsClient } from "@/components/search/SearchResultsClient";

export default async function SearchResultsPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  const title = categoryData ? categoryData.title : category.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      {/* Breadcrumbs & Top Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center text-sm text-slate-500 font-medium overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="capitalize">{categoryData?.routeGroup.replace("/", "") || "Search"}</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-slate-900 font-bold capitalize">{title}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <span className="text-slate-500">Sort by:</span>
            <select className="border border-slate-200 rounded-md px-2 py-1 outline-none">
              <option>Relevance</option>
              <option>Rating</option>
              <option>Distance</option>
            </select>
          </div>
        </div>
      </div>

      <SearchResultsClient category={category} title={title} />
    </div>
  );
}
