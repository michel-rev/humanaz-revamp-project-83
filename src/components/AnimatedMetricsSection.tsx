import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const AnimatedMetricsSection = () => {
  const { count: daysCount, elementRef: daysRef } = useCounterAnimation({ target: 15, duration: 2000 });
  const { count: candidatesCount, elementRef: candidatesRef } = useCounterAnimation({ target: 4, duration: 2200 });
  const { count: approvalCount, elementRef: approvalRef } = useCounterAnimation({ target: 97, duration: 2400 });

  return (
    <div className="pt-6 space-y-4">
      {/* Primeira linha - 2 itens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div ref={daysRef} className="animate-fade-in text-center sm:text-left">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {daysCount} DIAS
          </div>
          <div className="text-white text-sm sm:text-base">Corridos para entrega</div>
        </div>
        <div ref={candidatesRef} className="animate-fade-in text-center sm:text-left" style={{ animationDelay: '0.2s' }}>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {candidatesCount}
          </div>
          <div className="text-white text-sm sm:text-base">Candidatos qualificados</div>
        </div>
      </div>
      
      {/* Segunda linha - 1 item centralizado */}
      <div className="flex justify-center">
        <div ref={approvalRef} className="animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            {approvalCount}%
          </div>
          <div className="text-white text-sm sm:text-base">Taxa de aprovação</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMetricsSection;