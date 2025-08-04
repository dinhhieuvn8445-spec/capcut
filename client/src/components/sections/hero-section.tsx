import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/countdown-timer";
import { Play, Info, Flame } from "lucide-react";

export default function HeroSection() {
  const scrollToPricing = () => {
    const element = document.querySelector("#pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative gradient-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Flame className="text-orange-400 mr-2" size={16} />
                Khóa học HOT nhất 2025
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                KHÓA HỌC<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">CAPCUT</span>
              </h1>
              <div className="space-y-2 text-lg lg:text-xl text-slate-200">
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">✓</span>
                  Chỉ cần 1 buổi – Video của bạn sẽ khác biệt
                </p>
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">✓</span>
                  CapCut từ A-Z – Từ zero đến master
                </p>
                <p className="flex items-center">
                  <span className="text-orange-400 mr-2">✓</span>
                  Dựng video như chuyên gia – Không cần học cả tháng
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPricing}
                className="gradient-accent hover:opacity-90 text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Play className="mr-2" size={16} />
                MUA NGAY - 500K
              </Button>
              <Button 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-4 border-white/20 transition-all duration-300"
              >
                <Info className="mr-2" size={16} />
                Tìm hiểu thêm
              </Button>
            </div>

            <CountdownTimer />
          </div>

          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="CapCut video editing workspace" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
