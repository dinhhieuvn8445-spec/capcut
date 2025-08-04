import { CheckCircle, Smartphone, List, Rocket, Wand2, Clock, Users } from "lucide-react";

export default function CourseIntroSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Dễ học – Dễ làm",
      description: "Không cần kỹ thuật, không cần máy tính, chỉ cần điện thoại là đủ.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: List,
      title: "Hướng dẫn chi tiết từ A–Z",
      description: "Từng thao tác được hướng dẫn cụ thể, thực hành ngay trên video.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Rocket,
      title: "Ứng dụng thực tế cao",
      description: "Học xong là áp dụng được ngay vào dựng video TikTok, Reels, YouTube Shorts.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Wand2,
      title: "Dạy mẹo & kỹ thuật chuyên sâu",
      description: "Hiệu ứng bắt trend, chuyển cảnh mượt, phụ đề tự động, ghép nhạc đúng nhịp.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Tiết kiệm thời gian & công sức",
      description: "Chỉ vài giờ học là làm chủ CapCut – không phải loay hoay tự mày mò.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Phù hợp mọi đối tượng",
      description: "Dù bạn là học sinh, giáo viên, chủ shop online hay KOL – đều học và làm được.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "Phù hợp mọi đối tượng",
      description: "Học sinh, giáo viên, chủ shop online hay KOL – đều học và làm được"
    },
    {
      title: "Ứng dụng thực tế cao",
      description: "Áp dụng ngay vào TikTok, Reels, YouTube Shorts, video bán hàng"
    },
    {
      title: "Tiết kiệm thời gian",
      description: "Chỉ vài giờ học là làm chủ CapCut – không phải loay hoay tự mày mò"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Giới thiệu khóa học</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Khóa học CapCut – Làm chủ dựng video chỉ sau vài giờ! Bạn có ý tưởng nhưng không biết cách biến nó thành video cuốn hút? 
            Bạn muốn bắt trend TikTok, tạo video bán hàng hấp dẫn hay đơn giản là lưu giữ khoảnh khắc thật chất?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Online learning platform interface" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Tại sao nên học CapCut với HDT AI?</h3>
            <p className="text-slate-600 leading-relaxed">
              Khóa học CapCut này sẽ giúp bạn thành thạo mọi thao tác từ cơ bản đến nâng cao: cắt ghép, chèn nhạc, 
              thêm hiệu ứng, tạo phụ đề, chuyển giọng AI... Tất cả chỉ với chiếc điện thoại và hướng dẫn cực dễ hiểu.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-white" size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
