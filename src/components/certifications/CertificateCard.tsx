// components/certifications/CertificateCard.tsx
import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from 'lucide-react';

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
  return (
    <div className="relative group">
      <Card className="relative border-2 min-h-[404px] border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                     backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

        {certificate.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={certificate.image} 
              alt={certificate.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                (유효기간: {certificate.expiry})
              </span>
            )}
          </div>

          {certificate.image && (
            <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700">
              <ExternalLink className="w-4 h-4" />
              View Certificate
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};