import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const AnimatedMetricsSection = () => {
  const { count: daysCount, elementRef: daysRef } = useCounterAnimation({ target: 15, duration: 2000 });
  const { count: candidatesCount, elementRef: candidatesRef } = useCounterAnimation({ target: 4, duration: 2200 });
  const { count: approvalCount, elementRef: approvalRef } = useCounterAnimation({ target: 95, duration: 2400 });

  return (
    <div className="grid grid-cols-3 gap-8 pt-8">
      <div ref={daysRef} className="animate-fade-in">
        <div className="text-[3rem] font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {daysCount}
        </div>
        <div className="text-white">Dias para entrega</div>
      </div>
      <div ref={candidatesRef} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-[3rem] font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {candidatesCount}
        </div>
        <div className="text-white">Candidatos qualificados</div>
      </div>
      <div ref={approvalRef} className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-[3rem] font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {approvalCount}%
        </div>
        <div className="text-white">Taxa de aprovação</div>
      </div>
    </div>
  );
};

export default AnimatedMetricsSection;