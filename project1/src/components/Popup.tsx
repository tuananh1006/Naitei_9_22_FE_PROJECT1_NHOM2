"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Send } from "lucide-react";
import Image from "next/image";
import logoPopup from "../../public/imagelogo.png";

// Constants
const POPUP_STORAGE_KEY = "newsletter-popup-hidden";

interface NewsletterPopupProps {
  delay?: number;
}

// Simple VisuallyHidden component để ẩn title
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);

export default function NewsletterPopup({
  delay = 3000,
}: NewsletterPopupProps) {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if popup should be hidden
  const isPopupHidden = () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(POPUP_STORAGE_KEY) === "true";
  };

  useEffect(() => {
    if (isPopupHidden()) return;

    const timer = setTimeout(() => setIsOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClosePopup = () => {
    if (dontShowAgain && typeof window !== 'undefined') {
      localStorage.setItem(POPUP_STORAGE_KEY, "true");
    }
    setIsOpen(false);
  };

  // Xử lý submit form đăng ký email newsletter
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    // Bắt đầu quá trình submit
    setIsSubmitting(true);

    // (trong production sẽ gửi API)
    
    // Hiển thị thông báo thành công
    setShowNotification(true);
    
    // Reset form email
    setEmail("");

    // Tự động đóng popup sau 5 giây và ẩn thông báo
    setTimeout(() => {
      setShowNotification(false);
      setIsSubmitting(false);
      handleClosePopup();
    }, 7000);
  };

  const PopupHeader = () => (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        ĐĂNG KÝ EMAIL NGAY HÔM NAY
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        Đăng ký email ngay hôm nay để nhận các thông tin về sự kiện và các
        chương trình giảm giá từ chúng tôi
      </p>
    </div>
  );

  const LogoSection = () => (
    <div className="text-center">
      <Image
        src={logoPopup}
        alt="Green Shop Logo"
        width={400}
        height={200}
        className="object-contain mx-auto mb-4"
        priority
      />
      <div className="text-green-600 font-semibold text-lg">
        Green<span className="italic">Shop</span>
      </div>
      <p className="text-green-500 text-sm mt-1">
        Món quà từ thiên nhiên
      </p>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full max-w-[900px] mx-4 p-0 bg-white border-none shadow-2xl rounded-lg overflow-hidden">
        {/* Hidden title for accessibility */}
        <VisuallyHidden>
          <DialogTitle>Đăng ký nhận tin tức</DialogTitle>
        </VisuallyHidden>

        <Button
          onClick={handleClosePopup}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 p-2 rounded-full z-10 shadow-md"
          size="sm"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="relative bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
            <LogoSection />
          </div>

          <div className="bg-white px-8 py-8 flex flex-col justify-center">
            <PopupHeader />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  required
                  placeholder="Nhập email của bạn vào đây"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 pr-14 border-gray-300 focus:ring-green-500 focus:border-green-500 text-sm rounded-lg"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-2 h-8 w-8 p-0 bg-green-600 hover:bg-green-700 rounded-md"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-500">
                <Checkbox
                  id="dont-show-again"
                  checked={dontShowAgain}
                  onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="dont-show-again" className="cursor-pointer">
                  Không hiển thị lại thông báo này nữa
                </label>
              </div>
            </form>

            {showNotification && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm">
                Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất đến
                email của bạn.
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}






