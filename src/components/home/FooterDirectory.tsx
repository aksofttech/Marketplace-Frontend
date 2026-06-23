import Link from "next/link";
import { CATEGORIES } from "@/config/categories";

export function FooterDirectory() {
  const categoriesByLetter = CATEGORIES.reduce((acc, cat) => {
    const letter = cat.title.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(cat);
    return acc;
  }, {} as Record<string, typeof CATEGORIES>);

  const sortedLetters = Object.keys(categoriesByLetter).sort();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Top Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4">About SuperApp</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">List Your Business</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Advertise With Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">SuperApp for Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Get the App</h4>
            <div className="flex flex-col gap-3">
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 border border-slate-700 transition-colors w-full sm:w-auto">
                <span className="text-sm font-semibold">App Store</span>
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 border border-slate-700 transition-colors w-full sm:w-auto">
                <span className="text-sm font-semibold">Google Play</span>
              </button>
            </div>
          </div>
        </div>

        <hr className="border-slate-800 mb-8" />

        {/* Directory / JD Verticals */}
        <div>
          <h3 className="text-lg text-white font-bold mb-6">Browse All Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {sortedLetters.map((letter) => (
              <div key={letter} className="space-y-3">
                <div className="text-orange-500 font-bold text-lg border-b border-slate-800 pb-1">{letter}</div>
                <ul className="space-y-2 text-xs">
                  {categoriesByLetter[letter].map(cat => (
                    <li key={cat.id}>
                      <Link href={`/search/${cat.slug}`} className="hover:text-white transition-colors block truncate">
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} SuperApp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
