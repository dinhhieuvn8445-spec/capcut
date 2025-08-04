import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 20,
    minutes: 49,
    seconds: 57
  });

  useEffect(() => {
    const target = targetDate || new Date(Date.now() + 20 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000 + 49 * 60 * 1000 + 57 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center">
        <span className="mr-2">⏰</span>
        Ưu đãi kết thúc sau:
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-xs text-slate-300">Ngày</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs text-slate-300">Giờ</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs text-slate-300">Phút</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs text-slate-300">Giây</div>
        </div>
      </div>
    </div>
  );
}
