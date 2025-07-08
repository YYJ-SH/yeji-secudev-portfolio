"use client";

import { useState, useEffect, useCallback, useMemo, useTransition, memo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { content } from "@/data/content";
import { PlatformStatsCard } from "@/components/security/PlatformStatsCard";
import { WriteupCard } from "@/components/security/WriteUpCard";
import { BlogSection } from "@/components/security/BlogSection";
import RetroProjectCard from "@/components/portfolio/RetroProjectCard";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Shield, Zap, Target, Trophy } from "lucide-react";

// 디바운스 hook 최적화
function useDebounce(value: unknown, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 메모이즈된 검색 입력 컴포넌트
interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = memo(({ placeholder, value, onChange }: SearchInputProps) => (
  <div className="relative mb-6">
    <div className="absolute inset-0 bg-orange-500 transform rotate-1" />
    <div className="relative bg-black border-4 border-white p-4 transform hover:translate-x-2 hover:translate-y-2 transition-transform">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-lime-400 flex items-center justify-center transform rotate-45 border-2 border-black">
          <Search className="w-4 h-4 text-black transform -rotate-45" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-white font-bold placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  </div>
));

// 페이지네이션 컴포넌트 메모이제이션
interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PaginationComponent = memo(({ currentPage, totalPages, setPage }: PaginationComponentProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => setPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-orange-500 text-white font-black border-4 border-white transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        PREV
      </button>
      
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
          ) {
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`w-10 h-10 font-black border-4 border-white transform hover:scale-105 transition-transform
                  ${pageNum === currentPage 
                    ? 'bg-lime-400 text-black' 
                    : 'bg-black text-white hover:bg-pink-500'}`}
              >
                {pageNum}
              </button>
            );
          }
          return null;
        })}
      </div>
      
      <button
        onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-orange-500 text-white font-black border-4 border-white transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        NEXT
      </button>
    </div>
  );
});

// 데이터 필터링을 위한 안전한 함수
const safeIncludes = (text: any, searchTerm: any) => {
  if (!text || !searchTerm) return false;
  try {
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  } catch (e) {
    return false;
  }
};

// 메인 컴포넌트
export default function SecurityPage() {
  const { language } = useLanguage();
  const { security } = content[language];
  const [isPending, startTransition] = useTransition();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 초기 데이터 설정
  const initialWriteups = useMemo(() => security.ctf?.writeups || [], [security.ctf?.writeups]);
  const initialArticles = useMemo(() => security.articles || [], [security.articles]);
  const initialProjects = useMemo(() => security.teaching?.projects || [], [security.teaching?.projects]);

  // 페이지네이션 상태
  const [currentWriteupPage, setCurrentWriteupPage] = useState(1);
  const [currentArticlePage, setCurrentArticlePage] = useState(1);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const itemsPerPage = 4;

  // 사용자 입력 상태
  const [writeupInput, setWriteupInput] = useState("");
  const [articleInput, setArticleInput] = useState("");
  const [projectInput, setProjectInput] = useState("");
  
  // 디바운스된 검색어
  const writeupSearchQuery = useDebounce(writeupInput, 500);
  const articleSearchQuery = useDebounce(articleInput, 500);
  const projectSearchQuery = useDebounce(projectInput, 500);

  // 필터링된 데이터 상태
  const [filteredWriteups, setFilteredWriteups] = useState(initialWriteups);
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // 데이터 필터링 함수
  const filterWriteups = useCallback((query: any) => {
    if (!query || query.length === 0) return initialWriteups;
    
    const searchLower = query.toLowerCase();
    return initialWriteups.filter(item => {
      const titleMatch = item.title && safeIncludes(item.title, searchLower);
      const tagsMatch = item.tags && Array.isArray(item.tags) && 
        item.tags.some(tag => tag && safeIncludes(tag, searchLower));
      
      return titleMatch || tagsMatch;
    });
  }, [initialWriteups]);

  const filterArticles = useCallback((query: any) => {
    if (!query || query.length === 0) return initialArticles;
    
    const searchLower = query.toLowerCase();
    return initialArticles.filter(item => {
      const titleMatch = item.title && safeIncludes(item.title, searchLower);
      const summaryMatch = item.summary && safeIncludes(item.summary, searchLower);
      const tagsMatch = item.tags && Array.isArray(item.tags) && 
        item.tags.some(tag => tag && safeIncludes(tag, searchLower));
      
      return titleMatch || summaryMatch || tagsMatch;
    });
  }, [initialArticles]);

  const filterProjects = useCallback((query: any) => {
    if (!query || query.length === 0) return initialProjects;
    
    const searchLower = query.toLowerCase();
    return initialProjects.filter(item => {
      const titleMatch = item.title && safeIncludes(item.title, searchLower);
      const descMatch = item.description && safeIncludes(item.description, searchLower);
      const techMatch = item.technologies && Array.isArray(item.technologies) && 
        item.technologies.some(tech => tech && safeIncludes(tech, searchLower));
      
      return titleMatch || descMatch || techMatch;
    });
  }, [initialProjects]);

  // 검색어 변경 핸들러
  const handleWriteupChange = (value: string) => {
    setWriteupInput(value);
  };

  const handleArticleChange = (value: string) => {
    setArticleInput(value);
  };

  const handleProjectChange = (value: string) => {
    setProjectInput(value);
  };
  
  // 디바운스된 검색어로 필터링 적용
  useEffect(() => {
    startTransition(() => {
      setFilteredWriteups(filterWriteups(writeupSearchQuery));
      setCurrentWriteupPage(1);
    });
  }, [writeupSearchQuery, filterWriteups]);

  useEffect(() => {
    startTransition(() => {
      setFilteredArticles(filterArticles(articleSearchQuery));
      setCurrentArticlePage(1);
    });
  }, [articleSearchQuery, filterArticles]);

  useEffect(() => {
    startTransition(() => {
      setFilteredProjects(filterProjects(projectSearchQuery));
      setCurrentProjectPage(1);
    });
  }, [projectSearchQuery, filterProjects]);

  // 페이지네이션 로직
  const getPaginatedData = useCallback((data: any[], currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [itemsPerPage]);

  // 메모이제이션된 계산 값
  const totalWriteupPages = useMemo(() => 
    Math.ceil((filteredWriteups?.length || 0) / itemsPerPage),
    [filteredWriteups, itemsPerPage]
  );
  
  const totalArticlePages = useMemo(() => 
    Math.ceil((filteredArticles?.length || 0) / itemsPerPage), 
    [filteredArticles, itemsPerPage]
  );
  
  const totalProjectPages = useMemo(() => 
    Math.ceil((filteredProjects?.length || 0) / itemsPerPage), 
    [filteredProjects, itemsPerPage]
  );

  const paginatedWriteups = useMemo(() => 
    getPaginatedData(filteredWriteups, currentWriteupPage),
    [filteredWriteups, currentWriteupPage, getPaginatedData]
  );
  
  const paginatedArticles = useMemo(() => 
    getPaginatedData(filteredArticles, currentArticlePage),
    [filteredArticles, currentArticlePage, getPaginatedData]
  );
  
  const paginatedProjects = useMemo(() => 
    getPaginatedData(filteredProjects, currentProjectPage),
    [filteredProjects, currentProjectPage, getPaginatedData]
  );

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovered ? 2 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-orange-500 transform rotate-45" />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-lime-400 rounded-full" />
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-pink-500" />
        
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="block transform -rotate-2">SECURITY</span>
              <span className="block transform rotate-1 text-orange-500">RESEARCH</span>
            </h1>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-bold transform rotate-1 bg-lime-400 text-black p-6 inline-block">
                {security.subtitle}
              </p>
              <p className="text-lg bg-white text-black p-4 transform -rotate-1 border-2 border-pink-500 font-bold">
                {security.overview}
              </p>
            </div>
          </div>
        </div>
        
        {/* Scattered Text */}
        <div className="absolute top-40 right-20 text-4xl md:text-6xl font-black opacity-20 transform rotate-12">
          HACK
        </div>
        <div className="absolute bottom-32 left-32 text-3xl md:text-4xl font-black opacity-20 transform -rotate-12">
          SECURE
        </div>
      </section>

      {/* CTF Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-orange-500 flex items-center justify-center transform rotate-45">
              <Shield className="w-8 h-8 text-white transform -rotate-45" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black transform -rotate-1">
              {language === "ko" ? "CTF & 문제풀이" : "CTF & PROBLEM SOLVING"}
            </h2>
          </div>

          {/* Write-ups */}
          {initialWriteups.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-black text-lime-400 transform rotate-1">
                {language === "ko" ? "라이트업 (추가 중)" : "WRITE-UPS"}
              </h3>
              
              <SearchInput 
                placeholder={language === "ko" ? "검색어를 입력하세요..." : "Search writeups..."}
                value={writeupInput}
                onChange={handleWriteupChange}
              />
              
              {isPending && (
                <div className="bg-pink-500 text-white p-4 font-black text-center transform rotate-1 border-4 border-white">
                  {language === "ko" ? "검색 중..." : "SEARCHING..."}
                </div>
              )}
              
              {!isPending && filteredWriteups.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {paginatedWriteups.map((writeup) => (
                      <div key={writeup.id || writeup.title} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <WriteupCard writeup={writeup} />
                      </div>
                    ))}
                  </div>
                  <PaginationComponent 
                    currentPage={currentWriteupPage} 
                    totalPages={totalWriteupPages} 
                    setPage={setCurrentWriteupPage} 
                  />
                </>
              ) : !isPending && (
                <div className="bg-gray-800 text-white p-6 font-bold text-center border-4 border-white">
                  검색 조건에 맞는 라이트업이 없습니다.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Blog Articles Section */}
      {initialArticles.length > 0 && (
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-8 mb-16">
              <div className="w-16 h-16 bg-lime-400 flex items-center justify-center transform -rotate-45">
                <Zap className="w-8 h-8 text-black transform rotate-45" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black transform rotate-1">
                {language === "ko" ? "보안 테크블로그" : "SECURITY BLOG"}
              </h2>
            </div>
            
            <SearchInput 
              placeholder={language === "ko" ? "블로그 글 검색..." : "Search articles..."}
              value={articleInput}
              onChange={handleArticleChange}
            />
            
            {isPending && (
              <div className="bg-orange-500 text-white p-4 font-black text-center transform -rotate-1 border-4 border-white">
                {language === "ko" ? "검색 중..." : "SEARCHING..."}
              </div>
            )}
            
            {!isPending && filteredArticles.length > 0 ? (
              <>
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <BlogSection articles={paginatedArticles} />
                </div>
                <PaginationComponent 
                  currentPage={currentArticlePage} 
                  totalPages={totalArticlePages} 
                  setPage={setCurrentArticlePage} 
                />
              </>
            ) : !isPending && (
              <div className="bg-gray-800 text-white p-6 font-bold text-center border-4 border-white">
                검색 조건에 맞는 글이 없습니다.
              </div>
            )}
          </div>
        </section>
      )}

      {/* Security Education Section */}
      {initialProjects.length > 0 && (
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-8 mb-16">
              <div className="w-16 h-16 bg-pink-500 flex items-center justify-center transform rotate-45">
                <Target className="w-8 h-8 text-white transform -rotate-45" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black transform -rotate-1">
                {language === "ko" ? "보안 세션" : "SECURITY SESSIONS"}
              </h2>
            </div>
            
            <div className="bg-lime-400 text-black p-6 transform rotate-1 border-4 border-white mb-8">
              <p className="font-bold text-lg">{security.teaching?.description}</p>
            </div>

            <SearchInput 
              placeholder={language === "ko" ? "세션 검색..." : "Search sessions..."}
              value={projectInput}
              onChange={handleProjectChange}
            />
            
            {isPending && (
              <div className="bg-lime-400 text-black p-4 font-black text-center transform rotate-1 border-4 border-white">
                {language === "ko" ? "검색 중..." : "SEARCHING..."}
              </div>
            )}
            
            {!isPending && filteredProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  {paginatedProjects.map((project) => (
                    <RetroProjectCard key={project.id} project={project} />
                  ))}
                </div>
                <PaginationComponent 
                  currentPage={currentProjectPage} 
                  totalPages={totalProjectPages} 
                  setPage={setCurrentProjectPage} 
                />
              </>
            ) : !isPending && (
              <div className="bg-gray-800 text-white p-6 font-bold text-center border-4 border-white">
                검색 조건에 맞는 세션이 없습니다.
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
