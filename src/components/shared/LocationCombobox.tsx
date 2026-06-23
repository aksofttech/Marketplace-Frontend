"use client";

import * as React from "react";
import { Check, MapPin, Loader2, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLocationStore } from "@/store/useLocationStore";

// Custom hook for debouncing
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export interface Location {
  id: string;
  name: string;
  state: string;
}

export function LocationCombobox() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [locations, setLocations] = React.useState<Location[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDetecting, setIsDetecting] = React.useState(false);
  
  const { name, state, setLocation } = useLocationStore();

  React.useEffect(() => {
    if (!debouncedQuery) {
      setLocations([]);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    // Mock async fetch to /api/locations/search?q={query}
    const fetchLocations = async () => {
      try {
        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 600));
        
        if (isMounted) {
          // Dummy data matching the prompt requirements
          const mockResults: Location[] = [
            { id: "1", name: "Mumbai", state: "Maharashtra" },
            { id: "2", name: "Delhi", state: "Delhi" },
            { id: "3", name: "Bangalore", state: "Karnataka" },
            { id: "4", name: "Hyderabad", state: "Telangana" },
            { id: "5", name: "Pune", state: "Maharashtra" },
          ].filter((loc) => 
            loc.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
            loc.state.toLowerCase().includes(debouncedQuery.toLowerCase())
          );

          setLocations(mockResults);
        }
      } catch (error) {
        console.error("Failed to fetch locations", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchLocations();

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery]);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log("Detected coordinates:", lat, lng);
          
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          const data = await response.json();
          
          const cityName = data.address?.city || data.address?.town || data.address?.village || "Current Location";
          const stateName = data.address?.state || "Detected";
          
          setLocation(lat, lng, cityName, stateName, true);
        } catch (error) {
          console.error("Reverse geocoding failed:", error);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation(lat, lng, "Current Location", "Detected", true);
        } finally {
          setIsDetecting(false);
          setOpen(false);
        }
      },
      (error) => {
        // Handle error (permission denied, etc)
        setIsDetecting(false);
        alert("Location permission denied or failed to fetch.");
      }
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        role="combobox"
        aria-expanded={open}
        className="w-full h-full text-left outline-none text-slate-700 bg-transparent font-medium truncate placeholder:text-slate-400"
      >
        {name ? (
          <span className="truncate">{name}, {state}</span>
        ) : (
          <span className="text-slate-400">Select location...</span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 rounded-xl shadow-xl" align="start">
        <Command shouldFilter={false} className="border-0">
          <CommandInput 
            placeholder="Search city or area..." 
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            {isLoading && (
              <CommandLoading>Searching locations...</CommandLoading>
            )}
            
            {!isLoading && locations.length === 0 && query.length > 0 && (
              <CommandEmpty>No locations found.</CommandEmpty>
            )}
            
            <CommandGroup>
              <CommandItem
                onSelect={detectLocation}
                className="text-blue-600 font-medium cursor-pointer py-3"
              >
                {isDetecting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-600" />
                ) : (
                  <Navigation className="mr-2 h-4 w-4 text-blue-600" />
                )}
                📍 Detect my current location
              </CommandItem>
            </CommandGroup>

            {locations.length > 0 && (
              <CommandGroup heading="Results">
                {locations.map((loc) => (
                  <CommandItem
                    key={loc.id}
                    value={loc.id}
                    onSelect={() => {
                      // Note: Our mock locations don't have lat/lng. 
                      // We will use 0,0 for now, but a real API should provide lat/lng for selected cities.
                      setLocation(19.0760, 72.8777, loc.name, loc.state, false); 
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        name === loc.name ? "opacity-100 text-blue-600" : "opacity-0"
                      )}
                    />
                    {loc.name}, <span className="text-muted-foreground ml-1 text-sm">{loc.state}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
