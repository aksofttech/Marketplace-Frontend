import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Category } from "@/config/categories";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryGridProps {
  title: string;
  categories: Category[];
  viewAllLink?: string;
  variant?: "grid" | "scroll";
}

export function CategoryGrid({ title, categories, viewAllLink = "#", variant = "scroll" }: CategoryGridProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-6 border-b border-slate-100 last:border-0">
      <div className="flex items-center justify-between mb-4 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
        {viewAllLink && (
          <Link href={viewAllLink} className="text-sm font-medium text-blue-600 flex items-center hover:text-blue-800 transition-colors">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>

      {variant === "grid" ? (
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 px-4 md:px-0">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/search/${category.slug}`}>
                <Card className="hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer border-slate-100 bg-white shadow-sm h-full rounded-xl">
                  <CardContent className="p-3 flex flex-col items-center justify-center text-center gap-2 h-full">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-600 transition-colors">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-tight group-hover:text-blue-700">
                      {category.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <ScrollArea className="w-full whitespace-nowrap pb-4 px-4 md:px-0">
          <div className="flex w-max space-x-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={`/search/${category.slug}`} className="w-[120px] md:w-[140px] shrink-0">
                  <Card className="hover:border-orange-200 hover:shadow-md transition-all group cursor-pointer border-slate-100 bg-white shadow-sm rounded-xl">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 group-hover:text-orange-500 text-slate-600 transition-colors">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-tight group-hover:text-orange-600 whitespace-normal line-clamp-2">
                        {category.title}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="hidden md:flex" />
        </ScrollArea>
      )}
    </section>
  );
}
