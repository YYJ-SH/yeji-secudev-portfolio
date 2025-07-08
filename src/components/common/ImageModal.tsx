// components/common/ImageModal.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal = ({ isOpen, imageUrl, alt, onClose }: ImageModalProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState(false);
  const [touchDistance, setTouchDistance] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 마우스 위치 추적 (데스크톱만)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isOpen && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen, isMobile]);

  // 스케일이 변경될 때 포지션 초기화
  useEffect(() => {
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  // 드래그 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // 이미지 경계 제한
      const maxOffset = getMaxOffset();
      setPosition({
        x: Math.max(-maxOffset.x, Math.min(maxOffset.x, newX)),
        y: Math.max(-maxOffset.y, Math.min(maxOffset.y, newY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    } else if (e.touches.length === 2) {
      setIsPinching(true);
      const distance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      setTouchDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (isPinching && e.touches.length === 2) {
      const newDistance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const newScale = Math.max(0.5, Math.min(4, (newDistance / touchDistance) * scale));
      setScale(newScale);
    } else if (isDragging && e.touches.length === 1 && scale > 1) {
      const newX = e.touches[0].clientX - dragStart.x;
      const newY = e.touches[0].clientY - dragStart.y;
      
      const maxOffset = getMaxOffset();
      setPosition({
        x: Math.max(-maxOffset.x, Math.min(maxOffset.x, newX)),
        y: Math.max(-maxOffset.y, Math.min(maxOffset.y, newY))
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPinching(false);
  };

  // 최대 오프셋 계산
  const getMaxOffset = () => {
    if (!imageRef.current || !containerRef.current) {
      return { x: 0, y: 0 };
    }

    const imageRect = imageRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const scaledWidth = imageRect.width * scale;
    const scaledHeight = imageRect.height * scale;
    
    const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);
    
    return { x: maxX, y: maxY };
  };

  // 휠 줌
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newScale = Math.max(0.5, Math.min(4, scale + delta));
    setScale(newScale);
  };

  // 키보드 이벤트
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          setScale(prev => Math.min(4, prev + 0.2));
          break;
        case '-':
          setScale(prev => Math.max(0.5, prev - 0.2));
          break;
        case 'ArrowLeft':
          if (scale > 1) {
            e.preventDefault();
            setPosition(prev => ({ ...prev, x: prev.x + 50 }));
          }
          break;
        case 'ArrowRight':
          if (scale > 1) {
            e.preventDefault();
            setPosition(prev => ({ ...prev, x: prev.x - 50 }));
          }
          break;
        case 'ArrowUp':
          if (scale > 1) {
            e.preventDefault();
            setPosition(prev => ({ ...prev, y: prev.y + 50 }));
          }
          break;
        case 'ArrowDown':
          if (scale > 1) {
            e.preventDefault();
            setPosition(prev => ({ ...prev, y: prev.y - 50 }));
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, scale, onClose]);

  if (!isOpen) return null;

  const getCursor = () => {
    if (scale > 1) {
      return isDragging ? 'grabbing' : 'grab';
    }
    return 'zoom-in';
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black"
      onClick={onClose}
    >
      {/* Custom Cursor for Desktop */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-[60] mix-blend-difference transition-transform duration-150"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />
      )}

      {/* Mobile Header */}
      {isMobile ? (
        <div className="absolute top-0 w-full p-4 flex justify-between items-center z-[55] bg-black/80">
          <div className="bg-lime-400 text-black px-3 py-1 font-black text-sm border border-black">
            확대: {Math.round(scale * 100)}%
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center border-2 border-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        /* Desktop Controls */
        <div className="absolute top-4 w-full px-4 flex justify-between items-center z-[55]">
          <div className="flex gap-4">
            <button 
              className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform border-4 border-white font-black"
              onClick={(e) => {
                e.stopPropagation();
                setScale(prev => Math.max(0.5, prev - 0.5));
              }}
            >
              <ZoomOut className="w-6 h-6 transform -rotate-45" />
            </button>
            <button 
              className="w-12 h-12 bg-lime-400 text-black flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform border-4 border-white font-black"
              onClick={(e) => {
                e.stopPropagation();
                setScale(prev => Math.min(4, prev + 0.5));
              }}
            >
              <ZoomIn className="w-6 h-6 transform rotate-45" />
            </button>
            {scale > 1 && (
              <div className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center transform rotate-12 border-4 border-white">
                <Move className="w-6 h-6 transform -rotate-12" />
              </div>
            )}
          </div>
          
          <button 
            className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform border-4 border-white"
            onClick={onClose}
          >
            <X className="w-6 h-6 transform -rotate-12" />
          </button>
        </div>
      )}

      {/* Desktop Scale Indicator */}
      {!isMobile && (
        <div className="absolute top-20 left-4 bg-black border-4 border-white p-2 z-[55]">
          <span className="text-white font-black text-sm">ZOOM: {Math.round(scale * 100)}%</span>
        </div>
      )}

      {/* Image Container */}
      <div 
        ref={containerRef}
        className={`h-full w-full flex items-center justify-center ${isMobile ? 'pt-16 pb-16' : 'p-4'} relative overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
        onWheel={!isMobile ? handleWheel : undefined}
      >
        {/* Mobile Zoom Controls */}
        {isMobile && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-[55]">
            <button 
              className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center border-2 border-white"
              onClick={(e) => {
                e.stopPropagation();
                setScale(prev => Math.max(0.5, prev - 0.5));
              }}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button 
              className="w-12 h-12 bg-lime-400 text-black flex items-center justify-center border-2 border-white"
              onClick={(e) => {
                e.stopPropagation();
                setScale(prev => Math.min(4, prev + 0.5));
              }}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Image Frame */}
        <div className="relative max-w-full max-h-full">
          {!isMobile && (
            <div className="absolute inset-0 bg-orange-500 transform rotate-2 -z-10" />
          )}
          <div className={`relative bg-black ${isMobile ? 'border-2' : 'border-8'} border-white ${isMobile ? 'p-2' : 'p-4'}`}>
            <img
              ref={imageRef}
              src={imageUrl}
              alt={alt}
              className={`w-auto h-auto object-contain transition-transform ${
                isMobile 
                  ? 'max-w-[90vw] max-h-[60vh]' 
                  : 'max-w-[80vw] max-h-[70vh]'
              }`}
              style={{ 
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                cursor: getCursor()
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (scale <= 1) {
                  setScale(2);
                }
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      {scale > 1 && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="bg-lime-400 text-black px-4 py-2 font-bold text-sm inline-block border border-black mx-4">
            {isMobile 
              ? '드래그하여 이동 • 두 손가락으로 확대/축소' 
              : '드래그 또는 화살표 키로 이동 • 마우스 휠로 확대/축소 • ESC로 닫기'
            }
          </div>
        </div>
      )}

      {/* Desktop Decorative Elements */}
      {!isMobile && (
        <>
          <div className="absolute top-32 right-8 w-8 h-8 bg-lime-400 transform rotate-45 border-2 border-white" />
          <div className="absolute bottom-32 left-8 w-6 h-6 bg-pink-500 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-8 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-orange-500" />
        </>
      )}
    </div>
  );
};
