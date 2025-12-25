import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      // Use localStorage to persist across browser sessions (unique device tracking)
      const hasVisited = localStorage.getItem("portfolio_visited");
      
      if (!hasVisited) {
        // Increment visitor count only for new devices
        const { data, error } = await supabase.rpc("increment_visitor_count", {
          path: "/",
        });

        if (!error && data) {
          setVisitorCount(data);
          localStorage.setItem("portfolio_visited", "true");
        }
      } else {
        // Just fetch current count without incrementing
        const { data, error } = await supabase
          .from("page_visitors")
          .select("visit_count")
          .eq("page_path", "/")
          .maybeSingle();

        if (!error && data) {
          setVisitorCount(data.visit_count);
        }
      }
    };

    trackVisit();
  }, []);

  if (visitorCount === null) {
    return null;
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/50 border border-border/50 text-xs sm:text-sm">
      <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
      <span className="text-muted-foreground hidden xs:inline">Visitors:</span>
      <span className="font-semibold text-foreground">
        {visitorCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;
