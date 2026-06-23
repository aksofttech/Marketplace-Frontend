import { useQuery } from '@tanstack/react-query';

export interface Listing {
  id: string;
  slug: string;
  title: string;
  description: string;
  category_id: string;
  vendor_id: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  price: number;
  currency: string;
  is_active: boolean;
  is_featured: boolean;
  total_reviews: number;
  average_rating: number;
  created_at: string;
  updated_at: string;
  distance?: number;
  tags?: string[];
  image_url?: string;
  is_open_now?: boolean;
}

export interface ListingSearchResponse {
  items: Listing[];
  total: number;
  page: number;
  limit: number;
  has_next: boolean;
  has_previous: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export function useListings(categorySlug: string | null, lat: number | null, lng: number | null) {
  return useQuery<ListingSearchResponse>({
    queryKey: ['listings', categorySlug, lat, lng],
    queryFn: async () => {
      // Build query string
      const params = new URLSearchParams();
      if (categorySlug) params.append('category_slug', categorySlug);
      
      // If lat/lng are provided, use them for geo-spatial radius filtering
      if (lat !== null && lng !== null) {
        params.append('lat', lat.toString());
        params.append('lng', lng.toString());
        params.append('radius_meters', '50000'); // Use 50km for now to ensure results
        params.append('sort_by', 'distance');
      }

      const response = await fetch(`${API_BASE_URL}/listings?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    // Only run the query if we have either lat/lng OR if we explicitly want to allow fetching without location
    // We allow fetching without location because user might not have granted permission yet
    enabled: true,
  });
}
