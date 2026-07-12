import { useEffect, useState } from 'react';
import { Download, ExternalLink, FileText, AlertCircle } from 'lucide-react';
import { Section } from './Section';

const RESUME_PATH = 'assets/Divyam_Resume.pdf';

export function Resume() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPdfSupported, setIsPdfSupported] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect mobile viewport width (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check if browser supports PDF viewer
    if (typeof navigator !== 'undefined' && 'pdfViewerEnabled' in navigator && !navigator.pdfViewerEnabled) {
      setIsPdfSupported(false);
      setIsLoading(false);
    } else {
      // Validate PDF file exists
      fetch(RESUME_PATH, { method: 'HEAD' })
        .then((res) => {
          if (!res.ok) {
            setHasError(true);
          }
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Section id="resume" title="Resume">
      <div className="max-w-4xl">
        {/* Actions bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a
            href={RESUME_PATH}
            download="Divyam_Dave_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium transition-colors"
          >
            <ExternalLink size={18} />
            Open in New Tab
          </a>
        </div>

        {/* Embedded Viewer or Fallback / Mobile Cards */}
        <div className="w-full">
          {isMobile ? (
            /* Mobile Viewport Card */
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-4 p-8 w-full h-[250px] border border-neutral-200 dark:border-neutral-800 rounded-md bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer group text-center"
            >
              <FileText className="w-12 h-12 text-neutral-400 group-hover:text-accent dark:text-neutral-500 dark:group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-lg font-medium text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
                  Tap to view resume
                </span>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Opens PDF preview in a new tab
                </span>
              </div>
            </a>
          ) : isLoading ? (
            /* Loading State */
            <div className="w-full h-[800px] rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-neutral-300 dark:border-neutral-700 border-t-neutral-900 dark:border-t-white rounded-full animate-spin" />
            </div>
          ) : !isPdfSupported || hasError ? (
            /* Fallback Message Card */
            <div className="w-full h-[500px] md:h-[800px] rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex flex-col items-center justify-center p-8 text-center">
              <AlertCircle className="w-12 h-12 text-neutral-400 dark:text-neutral-600 mb-4" />
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Preview unavailable
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
                We couldn't load the resume preview. Please download the resume using the button above to view it.
              </p>
            </div>
          ) : (
            /* Desktop Iframe Viewer */
            <div className="w-full h-[800px] rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
              <iframe
                src={RESUME_PATH}
                title="Divyam Dave - Resume"
                className="w-full h-full border-none"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
