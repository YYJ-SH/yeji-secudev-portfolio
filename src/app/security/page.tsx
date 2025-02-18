"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { content } from "@/data/content";
import { PlatformStatsCard } from "@/components/security/PlatformStatsCard";
import { WriteupCard } from "@/components/security/WriteUpCard";
import { BlogSection } from "@/components/security/BlogSection";
import RetroProjectCard from "@/components/portfolio/RetroProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

export default function SecurityPage() {
  const { language } = useLanguage();
  const { security } = content[language];

  // Pagination states
  const [currentWriteupPage, setCurrentWriteupPage] = useState(1);
  const [currentArticlePage, setCurrentArticlePage] = useState(1);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const itemsPerPage = 4;

  // Search states
  const [writeupSearchQuery, setWriteupSearchQuery] = useState("");
  const [articleSearchQuery, setArticleSearchQuery] = useState("");
  const [projectSearchQuery, setProjectSearchQuery] = useState("");

  // Filtered data states
  const [filteredWriteups, setFilteredWriteups] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Effect for filtering writeups based on search
  useEffect(() => {
    const filtered = security.ctf?.writeups?.filter((writeup) =>
      writeup.title.toLowerCase().includes(writeupSearchQuery.toLowerCase()) ||
      writeup.description.toLowerCase().includes(writeupSearchQuery.toLowerCase()) ||
      writeup.tags.some(tag => tag.toLowerCase().includes(writeupSearchQuery.toLowerCase()))
    ) || [];
    setFilteredWriteups(filtered);
    setCurrentWriteupPage(1);
  }, [writeupSearchQuery, security.ctf?.writeups]);

  // Effect for filtering articles based on search
  useEffect(() => {
    const filtered = security.articles?.filter((article) =>
      article.title.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(articleSearchQuery.toLowerCase()))
    ) || [];
    setFilteredArticles(filtered);
    setCurrentArticlePage(1);
  }, [articleSearchQuery, security.articles]);

  // Effect for filtering projects based on search
  useEffect(() => {
    const filtered = security.teaching?.projects?.filter((project) =>
      project.title.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
      project.technologies?.some(tech => tech.toLowerCase().includes(projectSearchQuery.toLowerCase()))
    ) || [];
    setFilteredProjects(filtered);
    setCurrentProjectPage(1);
  }, [projectSearchQuery, security.teaching?.projects]);

  // Initialize filtered data
  useEffect(() => {
    setFilteredWriteups(security.ctf?.writeups || []);
    setFilteredArticles(security.articles || []);
    setFilteredProjects(security.teaching?.projects || []);
  }, [security]);

  // Pagination logic
  const getPaginatedData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalWriteupPages = Math.ceil((filteredWriteups?.length || 0) / itemsPerPage);
  const totalArticlePages = Math.ceil((filteredArticles?.length || 0) / itemsPerPage);
  const totalProjectPages = Math.ceil((filteredProjects?.length || 0) / itemsPerPage);

  const paginatedWriteups = getPaginatedData(filteredWriteups, currentWriteupPage);
  const paginatedArticles = getPaginatedData(filteredArticles, currentArticlePage);
  const paginatedProjects = getPaginatedData(filteredProjects, currentProjectPage);

  // Helper function to generate pagination UI
  const renderPagination = (currentPage, totalPages, setPage) => {
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
            // Show first page, current page, last page, and neighbors of current page
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
            // Show ellipsis for skipped pages
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
  };

  // Search input component
  const SearchInput = ({ placeholder, value, onChange }) => (
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
          CTF & Problem Solving
        </h2>

        {/* ✅ Platform Stats */}
        {security.ctf?.platforms?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {security.ctf.platforms.map((platform) => (
              <PlatformStatsCard key={platform.name} platform={platform} />
            ))}
          </div>
        )}

        {/* ✅ Write-ups with Search and Pagination */}
        {security.ctf?.writeups?.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Write-ups</h3>
            
            {/* Search */}
            <SearchInput 
              placeholder="Search write-ups by title, description, or tags..."
              value={writeupSearchQuery}
              onChange={setWriteupSearchQuery}
            />
            
            {filteredWriteups.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {paginatedWriteups.map((writeup) => (
                    <WriteupCard key={writeup.title} writeup={writeup} />
                  ))}
                </div>
                {renderPagination(currentWriteupPage, totalWriteupPages, setCurrentWriteupPage)}
              </>
            ) : (
              <p className="text-gray-500 italic">No write-ups found matching your search criteria.</p>
            )}
          </div>
        )}
      </section>

      {/* 🛡 Blog Articles Section with Search and Pagination */}
      {security.articles?.length > 0 && (
        <section className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                         text-transparent bg-clip-text mb-8">
            Security Articles
          </h2>
          
          {/* Search */}
          <SearchInput 
            placeholder="Search articles by title, summary, or tags..."
            value={articleSearchQuery}
            onChange={setArticleSearchQuery}
          />
          
          {filteredArticles.length > 0 ? (
            <>
              <BlogSection articles={paginatedArticles} />
              {renderPagination(currentArticlePage, totalArticlePages, setCurrentArticlePage)}
            </>
          ) : (
            <p className="text-gray-500 italic">No articles found matching your search criteria.</p>
          )}
        </section>
      )}

      {/* 🛡 Security Education (보안 교육) with Search and Pagination */}
      {security.teaching?.projects?.length > 0 && (
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                         text-transparent bg-clip-text mb-8">
            Security Education
          </h2>
          <p className="text-gray-600 mb-8">{security.teaching.description}</p>

          {/* Search */}
          <SearchInput 
            placeholder="Search projects by title, description, or technologies..."
            value={projectSearchQuery}
            onChange={setProjectSearchQuery}
          />
          
          {filteredProjects.length > 0 ? (
            <>
              <div className="space-y-16">
                {paginatedProjects.map((project) => (
                  <RetroProjectCard key={project.id} project={project} />
                ))}
              </div>
              {renderPagination(currentProjectPage, totalProjectPages, setCurrentProjectPage)}
            </>
          ) : (
            <p className="text-gray-500 italic">No projects found matching your search criteria.</p>
          )}
        </section>
      )}
    </main>
  );
}