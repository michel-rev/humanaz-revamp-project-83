import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const AnimatedMetricsSection = () => {
  const { count: daysCount, elementRef: daysRef } = useCounterAnimation({ target: 15, duration: 2000 });
  const { count: candidatesCount, elementRef: candidatesRef } = useCounterAnimation({ target: 4, duration: 2200 });
  const { count: approvalCount, elementRef: approvalRef } = useCounterAnimation({ target: 95, duration: 2400 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8">
      <div ref={daysRef} className="animate-fade-in text-center sm:text-left">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {daysCount}
        </div>
        <div className="text-white text-sm sm:text-base lg:text-lg">Dias para entrega</div>
      </div>
      <div ref={candidatesRef} className="animate-fade-in text-center sm:text-left" style={{ animationDelay: '0.2s' }}>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {candidatesCount}
        </div>
        <div className="text-white text-sm sm:text-base lg:text-lg">Candidatos qualificados</div>
      </div>
      <div ref={approvalRef} className="animate-fade-in text-center sm:text-left" style={{ animationDelay: '0.4s' }}>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {approvalCount}%
        </div>
        <div className="text-white text-sm sm:text-base lg:text-lg">Taxa de aprovação</div>
      </div>
    </div>
  );
};

export default AnimatedMetricsSection;