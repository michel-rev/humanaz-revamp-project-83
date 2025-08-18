import { useState, useEffect } from 'react';

interface SectionConfig {
  id: string;
  isDark: boolean;
}

const sectionConfigs: SectionConfig[] = [
  { id: 'hero', isDark: true },
  { id: 'flywheel', isDark: false },
  { id: 'interactive-demo', isDark: true },
  { id: 'processo', isDark: false },
  { id: 'clients', isDark: true },
  { id: 'cta', isDark: true },
];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionConfig>(sectionConfigs[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Find which section we're currently in
      for (let i = sectionConfigs.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionConfigs[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionConfigs[i]);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};