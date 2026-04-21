"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-white/8">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/8">
          <button
            className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-none group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-base text-white/80 group-hover:text-white transition-colors duration-300 font-medium">
              {faq.q}
            </span>
            <span className="flex-shrink-0 text-white/30 group-hover:text-[#FE4101] transition-colors duration-300">
              {open === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
              >
                <p className="pb-6 text-white/40 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
