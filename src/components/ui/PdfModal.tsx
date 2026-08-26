"use client";

import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import { Project } from "@/data/projectsData";

interface PdfModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ project, isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  if (!isOpen || !project) return null;

  const handleDownload = () => {
    setDownloading(true);

    setTimeout(() => {
      // Trigger direct download of real PDF asset from public/docs/
      const link = document.createElement("a");
      link.href = project.pdfUrl || `/docs/${project.pdfFileName}`;
      link.download = project.pdfFileName || `${project.slug}-blueprint.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 4000);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-paper border border-line rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cobalt">
                DOCUMENT DOWNLOAD
              </span>
              <h3 className="font-serif font-bold text-ink text-base sm:text-lg">
                {project.pdfTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-ink-soft hover:text-ink hover:bg-cloud transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Preview */}
        <div className="py-6 space-y-4">
          <div className="bg-cloud p-4 rounded-xl border border-line/60">
            <h4 className="font-serif font-bold text-ink text-sm mb-1">
              {project.title}
            </h4>
            <p className="text-xs text-ink-soft leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {project.metrics.map((m, i) => (
              <div key={i} className="bg-paper border border-line p-2.5 rounded-lg">
                <span className="font-serif font-bold text-cobalt text-sm block">
                  {m.value}
                </span>
                <span className="text-[10px] text-ink-soft block mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Verified Nitin Systems Diagnostic Case Study Asset</span>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-ink-soft hover:text-ink hover:bg-cloud border border-line transition-colors"
          >
            Cancel
          </button>

          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={project.pdfUrl || `/docs/${project.pdfFileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-cloud border border-line text-ink hover:text-cobalt text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Preview PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              {downloading ? (
                <span>Downloading...</span>
              ) : downloadComplete ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>PDF Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF ↗</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
