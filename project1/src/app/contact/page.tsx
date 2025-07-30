import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { GOOGLE_MAP_EMBED_URL } from "@/constants/urls";

const ContactPage = () => {
  return (
    <section className="w-full">
      {/* Google Map */}
      <div className="w-full">
        <iframe
          src={GOOGLE_MAP_EMBED_URL}
          className="w-full h-[420px] md:h-[450px] border-none"
          loading="lazy"
        />
      </div>

      {/* Nội dung chính */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactPage;
