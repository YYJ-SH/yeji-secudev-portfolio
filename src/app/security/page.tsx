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
import { Search } from "lucide-react";

// 디바운스 hook 최적화
function useDebounce(value, delay = 500) {
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
const SearchInput = memo(({ placeholder, value, onChange }) => (
  <div className="relative mb-6">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="pl-10 py-2 w-full max-w-md"
    />
  </div>
));

// 페이지네이션 컴포넌트 메모이제이션
const PaginationComponent = memo(({ currentPage, totalPages, setPage }) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setPage(Math.max(1, currentPage - 1))}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
        
        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  isActive={pageNum === currentPage}
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          }
          else if (
            (pageNum === 2 && currentPage > 3) ||
            (pageNum === totalPages - 1 && currentPage < totalPages - 2)
          ) {
            return (
              <PaginationItem key={`ellipsis-${pageNum}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return null;
        })}
        
        <PaginationItem>
          <PaginationNext 
            onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
});

// 데이터 필터링을 위한 안전한 함수
const safeIncludes = (text, searchTerm) => {
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
  const [isPending, startTransition] = useTransition(); // 성능 개선을 위한 useTransition

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
  
  // 디바운스된 검색어 (더 긴 지연시간 적용)
  const writeupSearchQuery = useDebounce(writeupInput, 500);
  const articleSearchQuery = useDebounce(articleInput, 500);
  const projectSearchQuery = useDebounce(projectInput, 500);

  // 필터링된 데이터 상태
  const [filteredWriteups, setFilteredWriteups] = useState(initialWriteups);
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // 데이터 필터링 함수 - useCallback으로 최적화
  const filterWriteups = useCallback((query) => {
    if (!query || query.length === 0) return initialWriteups;
    
    const searchLower = query.toLowerCase();
    return initialWriteups.filter(item => {
      // 안전하게 접근
      const titleMatch = item.title && safeIncludes(item.title, searchLower);
      const descMatch = item.description && safeIncludes(item.description, searchLower);
      const tagsMatch = item.tags && Array.isArray(item.tags) && 
        item.tags.some(tag => tag && safeIncludes(tag, searchLower));
      
      return titleMatch || descMatch || tagsMatch;
    });
  }, [initialWriteups]);

  const filterArticles = useCallback((query) => {
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

  const filterProjects = useCallback((query) => {
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

  // 검색어 변경 핸들러 - useTransition 적용
  const handleWriteupChange = (value) => {
    setWriteupInput(value);
  };

  const handleArticleChange = (value) => {
    setArticleInput(value);
  };

  const handleProjectChange = (value) => {
    setProjectInput(value);
  };
  
  // 디바운스된 검색어로 필터링 적용 (저우선순위로 처리)
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
  const getPaginatedData = useCallback((data, currentPage) => {
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
    <main className="min-h-screen pt-24 pb-16">
      {/* 🛡 Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                     text-transparent bg-clip-text mb-4">
          {security.title}
        </h1>
        <p className="text-xl text-gray-700 font-medium">{security.subtitle}</p>
        <p className="mt-4 text-gray-600">{security.overview}</p>
      </section>

      {/* 🛡 CTF Section */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                     text-transparent bg-clip-text mb-8">
        {language === "ko" ? "CTF&문제풀이" : "CTF&Problem Solving"}
        </h2>

        {/* ✅ Platform Stats */}
        {/* {security.ctf?.platforms?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {security.ctf.platforms.map((platform) => (
              <PlatformStatsCard key={platform.name} platform={platform} />
            ))}
          </div>
        )} */}

        {/* ✅ Write-ups with Search and Pagination */}
        {initialWriteups.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-700">{language === "ko" ? "라이트업(추가 중)" : "Write-ups"}</h3>
            
            {/* 검색 입력 컴포넌트 */}
            <SearchInput 
              placeholder="Search"
              value={writeupInput}
              onChange={handleWriteupChange}
            />
            
            {isPending && (
              <p className="text-gray-500">
                {language === "ko" ? "검색 중..." : "Searching..."}
              </p>
            )}
            
            {!isPending && filteredWriteups.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {paginatedWriteups.map((writeup) => (
                    <WriteupCard key={writeup.id || writeup.title} writeup={writeup} />
                  ))}
                </div>
                <PaginationComponent 
                  currentPage={currentWriteupPage} 
                  totalPages={totalWriteupPages} 
                  setPage={setCurrentWriteupPage} 
                />
              </>
            ) : !isPending && (
              <p className="text-gray-500 italic">No write-ups found matching your search criteria.</p>
            )}
          </div>
        )}
      </section>

      {/* 🛡 Blog Articles Section with Search and Pagination */}
      {initialArticles.length > 0 && (
        <section className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-8">
           {language === "ko" ? "보안 테크블로그 작성글" : "Security Articles"}
          </h2>
          
          {/* 검색 입력 컴포넌트 */}
          <SearchInput 
            placeholder="Search"
            value={articleInput}
            onChange={handleArticleChange}
          />
          
          {isPending && (
            <p className="text-gray-500">Searching...</p>
          )}
          
          {!isPending && filteredArticles.length > 0 ? (
            <>
              <BlogSection articles={paginatedArticles} />
              <PaginationComponent 
                currentPage={currentArticlePage} 
                totalPages={totalArticlePages} 
                setPage={setCurrentArticlePage} 
              />
            </>
          ) : !isPending && (
            <p className="text-gray-500 italic">No articles found matching your search criteria.</p>
          )}
        </section>
      )}

      {/* 🛡 Security Education (보안 교육) with Search and Pagination */}
      {initialProjects.length > 0 && (
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-8">
            {language === "ko" ? "주최한 보안 세션" : "Holded Security Sessions"}
          </h2>
          <p className="text-gray-600 mb-8">{security.teaching?.description}</p>

          {/* 검색 입력 컴포넌트 */}
          <SearchInput 
            placeholder="Search"
            value={projectInput}
            onChange={handleProjectChange}
          />
          
          {isPending && (
            <p className="text-gray-500">Searching...</p>
          )}
          
          {!isPending && filteredProjects.length > 0 ? (
            <>
              <div className="space-y-16">
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
            <p className="text-gray-500 italic">No projects found matching your search criteria.</p>
          )}
        </section>
      )}
    </main>
  );
}