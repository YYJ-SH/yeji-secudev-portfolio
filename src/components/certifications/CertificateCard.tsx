import { useState } from "react";
import { Award, Calendar, ExternalLink, X, Eye } from 'lucide-react';
import { useLanguage } from "@/contexts/language-context";
import { ImageModal } from "@/components/common/ImageModal";

interface CertificateProps {
  certificate: {
    name: string;
    issuer: string;
    date: string;
    expiry?: string;
    type: string;
    image?: string;
  };
  colorIndex?: number;
  sectionType?: string;
}

export const CertificateCard = ({ certificate, colorIndex = 0, sectionType = 'certification' }: CertificateProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { language } = useLanguage();

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  // 색상 배열
  const colors = ['bg-orange-500', 'bg-lime-400', 'bg-pink-500'];
  const cardColor = colors[colorIndex % 3];

  // 타입별 기본 색상
  const getTypeColor = () => {
    switch (sectionType) {
      case 'certification':
        return 'bg-orange-500';
      case 'license':
        return 'bg-lime-400';
      case 'award':
        return 'bg-pink-500';
      default:
        return 'bg-orange-500';
    }
  };

  return (
    <>
      <div className="relative group">
        {/* Brutalist Shadow */}
        <div className={`absolute inset-0 ${cardColor} transform ${colorIndex % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
          group-hover:rotate-0 transition-transform duration-300`} />
        
        <div className="relative bg-black border-4 border-white min-h-[400px] transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
          {/* Certificate Image */}
          {certificate.image && (
            <div 
              className="relative h-48 overflow-hidden cursor-pointer border-b-4 border-white group-hover:scale-105 transition-transform duration-300" 
              onClick={toggleImage}
            >
              <img 
                src={certificate.image} 
                alt={certificate.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-orange-500 text-white px-4 py-2 font-black border-2 border-white flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {language === 'ko' ? '자세히 보기' : 'VIEW CERT'}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-lime-400 transform rotate-45 border-2 border-black" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-black text-white mb-2 leading-tight">
                  {certificate.name}
                </h3>
                <div className="bg-white text-black p-2 transform -rotate-1 border-2 border-lime-400 inline-block">
                  <p className="font-bold text-sm">{certificate.issuer}</p>
                </div>
              </div>
              <div className={`w-12 h-12 ${getTypeColor()} flex items-center justify-center transform rotate-45 border-2 border-white`}>
                <Award className="w-6 h-6 text-black transform -rotate-45" />
              </div>
            </div>

            {/* Date Info */}
            <div className="space-y-3">
              <div className="bg-pink-500 text-white p-3 border-2 border-white transform rotate-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold text-sm">
                    {language === 'ko' ? '취득일: ' : 'Date: '}{certificate.date}
                  </span>
                </div>
              </div>

              {certificate.expiry && (
                <div className="bg-orange-500 text-white p-3 border-2 border-white transform -rotate-1">
                  <span className="font-bold text-sm">
                    {language === 'ko' ? `유효기간: ${certificate.expiry}` : `Valid until: ${certificate.expiry}`}
                  </span>
                </div>
              )}
            </div>

            {/* View Button */}
            {certificate.image && (
              <button 
                className="w-full bg-lime-400 text-black p-3 font-black hover:scale-105 transition-transform border-2 border-black flex items-center justify-center gap-2"
                onClick={toggleImage}
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'ko' ? '인증서 보기' : 'VIEW CERTIFICATE'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageOpen}
        imageUrl={certificate.image || ""}
        alt={certificate.name}
        onClose={() => setIsImageOpen(false)}
      />
    </>
  );
};
