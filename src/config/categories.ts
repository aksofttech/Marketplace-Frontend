import {
  Utensils, Bed, Sparkles, Home, HeartHandshake, GraduationCap, Car,
  Stethoscope, HardHat, Dog, Building, MapPin, Calculator, Dumbbell,
  Landmark, Calendar, Truck, Package, Gem, Scissors, Flower2,
  Wrench, Bike, Film, ShoppingCart, Zap, Smartphone, Droplet,
  Flame, ShieldCheck, Plane, Bus, Train, Ticket, PlaneTakeoff,
  TreePalm, Sunrise, Briefcase, Pill, Sprout, Shirt, Moon,
  Monitor, Lightbulb, Box, Lock, Music, Gamepad2, ShoppingBag,
  Eye, Droplets, PaintRoller, Waves, Snowflake
} from "lucide-react";

export interface Category {
  id: string;
  title: string;
  icon: any; // Lucide icon
  routeGroup: "/commerce" | "/booking" | "/inquiry" | "/ticketing" | "/utilities";
  slug: string;
}

export const CATEGORIES: Category[] = [
  // Top Categories
  { id: "c1", title: "Restaurants", icon: Utensils, routeGroup: "/commerce", slug: "restaurants" },
  { id: "c2", title: "Hotels", icon: Bed, routeGroup: "/booking", slug: "hotels" },
  { id: "c3", title: "Beauty Spa", icon: Sparkles, routeGroup: "/booking", slug: "beauty-spa" },
  { id: "c4", title: "Home Decor", icon: Home, routeGroup: "/commerce", slug: "home-decor" },
  { id: "c5", title: "Wedding Planning", icon: HeartHandshake, routeGroup: "/inquiry", slug: "wedding-planning" },
  { id: "c6", title: "Education", icon: GraduationCap, routeGroup: "/inquiry", slug: "education" },
  { id: "c7", title: "Rent & Hire", icon: Car, routeGroup: "/booking", slug: "rent-hire" },
  { id: "c8", title: "Hospitals", icon: Stethoscope, routeGroup: "/inquiry", slug: "hospitals" },
  { id: "c9", title: "Contractors", icon: HardHat, routeGroup: "/inquiry", slug: "contractors" },
  { id: "c10", title: "Pet Shops", icon: Dog, routeGroup: "/commerce", slug: "pet-shops" },
  { id: "c11", title: "PG/Hostels", icon: Building, routeGroup: "/booking", slug: "pg-hostels" },
  { id: "c12", title: "Estate Agent", icon: MapPin, routeGroup: "/inquiry", slug: "estate-agent" },
  { id: "c13", title: "Dentists", icon: Stethoscope, routeGroup: "/booking", slug: "dentists" },
  { id: "c14", title: "Gym", icon: Dumbbell, routeGroup: "/booking", slug: "gym" },
  { id: "c15", title: "Loans", icon: Landmark, routeGroup: "/inquiry", slug: "loans" },
  { id: "c16", title: "Event Organisers", icon: Calendar, routeGroup: "/inquiry", slug: "event-organisers" },
  { id: "c17", title: "Dining", icon: Utensils, routeGroup: "/commerce", slug: "dining" },
  { id: "c18", title: "Packers & Movers", icon: Truck, routeGroup: "/inquiry", slug: "packers-movers" },
  { id: "c19", title: "Courier Service", icon: Package, routeGroup: "/inquiry", slug: "courier-service" },

  // Wedding Requisites
  { id: "c20", title: "Banquet Halls", icon: Building, routeGroup: "/inquiry", slug: "banquet-halls" },
  { id: "c21", title: "Bridal Requisite", icon: Gem, routeGroup: "/commerce", slug: "bridal-requisite" },
  { id: "c22", title: "Caterers", icon: Utensils, routeGroup: "/inquiry", slug: "caterers" },

  // Beauty & Spa
  { id: "c23", title: "Beauty Parlours", icon: Sparkles, routeGroup: "/booking", slug: "beauty-parlours" },
  { id: "c24", title: "Spa & Massages", icon: Flower2, routeGroup: "/booking", slug: "spa-massages" },
  { id: "c25", title: "Salons", icon: Scissors, routeGroup: "/booking", slug: "salons" },

  // Repairs & Services
  { id: "c26", title: "AC Service", icon: Wrench, routeGroup: "/booking", slug: "ac-service" },
  { id: "c27", title: "Car Service", icon: Car, routeGroup: "/booking", slug: "car-service" },
  { id: "c28", title: "Bike Service", icon: Bike, routeGroup: "/booking", slug: "bike-service" },

  // Daily Needs
  { id: "c29", title: "Movies", icon: Film, routeGroup: "/ticketing", slug: "movies" },
  { id: "c30", title: "Grocery", icon: ShoppingCart, routeGroup: "/commerce", slug: "grocery" },
  { id: "c31", title: "Electricians", icon: Zap, routeGroup: "/booking", slug: "electricians" },

  // Bills & Recharge
  { id: "c32", title: "Mobile", icon: Smartphone, routeGroup: "/utilities", slug: "mobile-recharge" },
  { id: "c33", title: "Electricity", icon: Zap, routeGroup: "/utilities", slug: "electricity-bill" },
  { id: "c34", title: "DTH", icon: Monitor, routeGroup: "/utilities", slug: "dth-recharge" },
  { id: "c35", title: "Water", icon: Droplet, routeGroup: "/utilities", slug: "water-bill" },
  { id: "c36", title: "Gas", icon: Flame, routeGroup: "/utilities", slug: "gas-bill" },
  { id: "c37", title: "Insurance", icon: ShieldCheck, routeGroup: "/utilities", slug: "insurance" },

  // Travel Bookings
  { id: "c38", title: "Flight", icon: PlaneTakeoff, routeGroup: "/ticketing", slug: "flight-booking" },
  { id: "c39", title: "Bus", icon: Bus, routeGroup: "/ticketing", slug: "bus-booking" },
  { id: "c40", title: "Train", icon: Train, routeGroup: "/ticketing", slug: "train-booking" },
  { id: "c41", title: "Hotel", icon: Bed, routeGroup: "/booking", slug: "hotel-booking" },
  { id: "c42", title: "Car Rentals", icon: Car, routeGroup: "/booking", slug: "car-rentals" },

  // Trending Searches & Sunny Day Essentials
  { id: "c43", title: "Paying Guest Accommodations", icon: Building, routeGroup: "/booking", slug: "pg-accommodations" },
  { id: "c44", title: "Water Parks", icon: Waves, routeGroup: "/ticketing", slug: "water-parks" },
  { id: "c45", title: "Cinema Halls", icon: Film, routeGroup: "/ticketing", slug: "cinema-halls" },
  { id: "c46", title: "Water Suppliers", icon: Droplets, routeGroup: "/inquiry", slug: "water-suppliers" },
  { id: "c47", title: "Water Tank Cleaning Services", icon: Droplet, routeGroup: "/booking", slug: "water-tank-cleaning" },
  { id: "c48", title: "Waterproofing Contractors", icon: PaintRoller, routeGroup: "/inquiry", slug: "waterproofing" },
  { id: "c49", title: "Refrigerator Dealers", icon: Snowflake, routeGroup: "/commerce", slug: "refrigerator-dealers" },
  
  // Extra Verticals (B2B, Doctors, etc.)
  { id: "c50", title: "B2B", icon: Briefcase, routeGroup: "/inquiry", slug: "b2b" },
  { id: "c51", title: "Doctors", icon: Stethoscope, routeGroup: "/booking", slug: "doctors" },
  { id: "c52", title: "Agriculture", icon: Sprout, routeGroup: "/commerce", slug: "agriculture" },
  { id: "c53", title: "Apparel", icon: Shirt, routeGroup: "/commerce", slug: "apparel" },
  { id: "c54", title: "Astrology", icon: Moon, routeGroup: "/booking", slug: "astrology" },
  { id: "c55", title: "Automobiles & Two Wheelers", icon: Car, routeGroup: "/commerce", slug: "automobiles" },
  { id: "c56", title: "Business & Legal", icon: Briefcase, routeGroup: "/inquiry", slug: "business-legal" },
  { id: "c57", title: "Chemicals", icon: Box, routeGroup: "/commerce", slug: "chemicals" },
  { id: "c58", title: "Construction & Real Estate", icon: Building, routeGroup: "/inquiry", slug: "construction" },
  { id: "c59", title: "Electronic Component", icon: Zap, routeGroup: "/commerce", slug: "electronic-component" },
  { id: "c60", title: "Electronics", icon: Monitor, routeGroup: "/commerce", slug: "electronics" },
  { id: "c61", title: "Energy", icon: Lightbulb, routeGroup: "/commerce", slug: "energy" },
  { id: "c62", title: "Engineering", icon: Wrench, routeGroup: "/inquiry", slug: "engineering" },
  { id: "c63", title: "Entertainment", icon: Music, routeGroup: "/ticketing", slug: "entertainment" },
  { id: "c64", title: "Events & Wedding", icon: HeartHandshake, routeGroup: "/inquiry", slug: "events-wedding" },
  { id: "c65", title: "Food & Beverage", icon: Utensils, routeGroup: "/commerce", slug: "food-beverage" },
  { id: "c66", title: "Furniture", icon: Home, routeGroup: "/commerce", slug: "furniture" },
  { id: "c67", title: "Health & Medical", icon: Pill, routeGroup: "/booking", slug: "health-medical" },
  { id: "c68", title: "Home & Garden", icon: TreePalm, routeGroup: "/commerce", slug: "home-garden" },
  { id: "c69", title: "Housekeeping", icon: Sparkles, routeGroup: "/booking", slug: "housekeeping" },
  { id: "c70", title: "Industrial Plants", icon: Building, routeGroup: "/inquiry", slug: "industrial-plants" },
  { id: "c71", title: "IT Collection", icon: Monitor, routeGroup: "/commerce", slug: "it-collection" },
  { id: "c72", title: "Jewellery", icon: Gem, routeGroup: "/commerce", slug: "jewellery" },
  { id: "c73", title: "Lights & Lighting", icon: Lightbulb, routeGroup: "/commerce", slug: "lights-lighting" },
  { id: "c74", title: "Luggage Bags", icon: ShoppingBag, routeGroup: "/commerce", slug: "luggage-bags" },
  { id: "c75", title: "Office Supplies", icon: Box, routeGroup: "/commerce", slug: "office-supplies" },
  { id: "c76", title: "Packaging & Printing", icon: Box, routeGroup: "/inquiry", slug: "packaging-printing" },
  { id: "c77", title: "Placements", icon: Briefcase, routeGroup: "/inquiry", slug: "placements" },
  { id: "c78", title: "Rubber & Plastics", icon: Box, routeGroup: "/commerce", slug: "rubber-plastics" },
  { id: "c79", title: "Security & Protection", icon: Lock, routeGroup: "/commerce", slug: "security" },
  { id: "c80", title: "Sports & Entertainment", icon: Gamepad2, routeGroup: "/commerce", slug: "sports" },
  { id: "c81", title: "Textile & Leather", icon: Shirt, routeGroup: "/commerce", slug: "textile" },
  { id: "c82", title: "Toys & Games", icon: Gamepad2, routeGroup: "/commerce", slug: "toys-games" },
  { id: "c83", title: "Transportation & Shipping", icon: Truck, routeGroup: "/inquiry", slug: "transportation" },
  { id: "c84", title: "Travel", icon: Plane, routeGroup: "/ticketing", slug: "travel" },
  { id: "c85", title: "Watches & Eyewear", icon: Eye, routeGroup: "/commerce", slug: "watches-eyewear" },
];

export const getCategoryBySlug = (slug: string) => CATEGORIES.find(c => c.slug === slug);
