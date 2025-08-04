import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const courses = [
    {
      name: "CƠ BẢN",
      price: "500.000đ",
      description: "Phù hợp cho người mới bắt đầu",
      features: [
        "Hướng dẫn cơ bản CapCut",
        "Cắt ghép video đơn giản",
        "Thêm nhạc và hiệu ứng",
        "Hỗ trợ trong 30 ngày"
      ],
      buttonStyle: "bg-primary hover:bg-secondary text-white",
      isPopular: false
    },
    {
      name: "NÂNG CAO",
      price: "500.000đ",
      description: "Dành cho người muốn chuyên nghiệp",
      features: [
        "Tất cả tính năng cơ bản",
        "Hiệu ứng chuyên nghiệp",
        "Chuyển giọng AI",
        "Phụ đề tự động",
        "Hỗ trợ trọn đời"
      ],
      buttonStyle: "bg-orange-500 hover:bg-yellow-500 text-white",
      isPopular: true
    },
    {
      name: "FULL COMBO",
      price: "1.000.000đ",
      originalPrice: "1.200.000đ",
      description: "Tiết kiệm 200.000đ",
      features: [
        "Tất cả khóa học",
        "Bonus: Marketing video",
        "Template premium",
        "Cộng đồng VIP",
        "Hỗ trợ 1-1 unlimited"
      ],
      buttonStyle: "gradient-accent hover:opacity-90 text-white",
      isPopular: false
    }
  ];

  const scrollToRegistration = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Các khóa học của chúng tôi</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Lựa chọn gói học phù hợp với nhu cầu và ngân sách của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 shadow-lg transition-all duration-300 relative ${
                course.isPopular 
                  ? "gradient-primary text-white transform scale-105" 
                  : "bg-white border-2 border-slate-200 hover:border-primary"
              }`}
            >
              {course.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    PHỔ BIẾN NHẤT
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${course.isPopular ? "text-white" : "text-slate-900"}`}>
                  {course.name}
                </h3>
                <div className="mb-4">
                  {course.originalPrice && (
                    <div className="text-2xl line-through text-slate-400 mb-1">
                      {course.originalPrice}
                    </div>
                  )}
                  <div className={`text-4xl font-bold ${course.isPopular ? "text-white" : "text-primary"}`}>
                    {course.price}
                  </div>
                </div>
                <p className={course.isPopular ? "text-blue-100" : "text-slate-600"}>
                  {course.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`${course.isPopular ? "text-orange-400" : "text-green-500"}`} size={16} />
                    <span className={course.isPopular ? "text-white" : "text-slate-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={scrollToRegistration}
                className={`w-full font-semibold py-3 transition-all duration-300 ${course.buttonStyle}`}
              >
                Đăng ký ngay
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
