// components/common/ImageModal.tsx
'use client';

import { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal = ({ isOpen, imageUrl, alt, onClose }: ImageModalProps) => {
  const [scale, setScale] = useState(1);
  const [isPinching, setIsPinching] = useState(false);
  const [touchDistance, setTouchDistance] = useState(0);

  // 핀치 줌 처리
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        setIsPinching(true);
        const distance = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        setTouchDistance(distance);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isPinching && e.touches.length === 2) {
        const newDistance = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );
        const scale = Math.max(0.5, Math.min(3, newDistance / touchDistance));
        setScale(scale);
      }
    };

    const handleTouchEnd = () => {
      setIsPinching(false);
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isPinching, touchDistance]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm touch-none"
      onClick={onClose}
    >
      {/* Controls */}
      <div className="absolute top-4 w-full px-4 flex justify-between items-center">
        {/* Zoom Controls - Desktop Only */}
        <div className="hidden md:flex gap-2">
          <button 
            className="p-2 text-white hover:text-purple-300 transition-colors bg-black/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setScale(prev => Math.max(0.5, prev - 0.5));
            }}
          >
            <ZoomOut className="w-6 h-6" />
          </button>
          <button 
            className="p-2 text-white hover:text-purple-300 transition-colors bg-black/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setScale(prev => Math.min(3, prev + 0.5));
            }}
          >
            <ZoomIn className="w-6 h-6" />
          </button>
        </div>
        
        {/* Close Button */}
        <button 
          className="p-2 text-white hover:text-purple-300 transition-colors bg-black/20 rounded-full ml-auto"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image Container */}
      <div 
        className="h-full w-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-full max-h-full overflow-auto">
          <img
            src={imageUrl}
            alt={alt}
            className="w-auto h-auto max-w-full max-h-[85vh] object-contain transition-transform"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm md:hidden">
        두 손가락으로 확대/축소할 수 있습니다
      </div>
    </div>
  );
};