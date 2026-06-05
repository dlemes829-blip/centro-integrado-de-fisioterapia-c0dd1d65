import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business-data";

export function FloatingWhatsApp() {
  return (
    <a className="floatingWhatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <MessageCircle size={30} />
    </a>
  );
}
