import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      // Check if already visited in this session
      const hasVisited = sessionStorage.getItem("hasVisited");
      
      if (!hasVisited) {
        // Increment visitor count
        const { data, error } = await supabase.rpc("increment_visitor_count", {
          path: "/",
        });

        if (!error && data) {
          setVisitorCount(data);
          sessionStorage.setItem("hasVisited", "true");
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
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-sm">
      <Eye className="h-4 w-4 text-primary" />
      <span className="text-muted-foreground">Visitors:</span>
      <span className="font-semibold text-foreground">
        {visitorCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;
