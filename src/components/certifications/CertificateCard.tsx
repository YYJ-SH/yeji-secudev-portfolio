import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import { useLanguage } from "@/contexts/language-context";

interface CertificateProps {
  certificate: {
    name: string;
    issuer: string;
    date: string;
    expiry?: string;
    type: 'certification' | 'license' | 'award';
    image?: string;
  };
}

export const CertificateCard = ({ certificate }: CertificateProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { language } = useLanguage();

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <>
      <div className="relative group">
        <Card className="relative border-2 min-h-[404px] border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                        backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

          {certificate.image && (
            <div 
              className="relative h-48 overflow-hidden cursor-pointer group" 
              onClick={toggleImage}
            >
              <img 
                src={certificate.image} 
                alt={certificate.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Zoom Hint */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 
                            flex items-center justify-center opacity-0 group-hover:opacity-100 
                            transition-all duration-300">
                <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                  {language === 'ko' ? '크게 보기' : 'View Larger'}
                </span>
              </div>
            </div>
          )}

          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                              text-transparent bg-clip-text">
                  {certificate.name}
                </h3>
                <p className="text-gray-600 font-medium">{certificate.issuer}</p>
              </div>
              <Award className="w-6 h-6 text-purple-500" />
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>{certificate.date}</span>
              {certificate.expiry && (
                <span className="text-sm text-gray-500">
                  {language === 'ko' ? `(유효기간: ${certificate.expiry})` : `(Valid until: ${certificate.expiry})`}
                </span>
              )}
            </div>

            {certificate.image && (
              <button 
                className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
                onClick={toggleImage}
              >
                {/* <ExternalLink className="w-4 h-4" />
                {language === 'ko' ? '인증서 보기' : 'View Certificate'} */}
              </button>
            )}
          </div>
        </Card>
      </div>

      {/* 확대된 이미지 모달 */}
      {isImageOpen && certificate.image && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={toggleImage}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={certificate.image} 
                alt={certificate.name}
                className="w-full object-contain max-h-[80vh]"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={toggleImage}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">{certificate.name}</h3>
              <p className="text-gray-600">{certificate.issuer}</p>
              <p className="text-gray-500 text-sm mt-1">{certificate.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};