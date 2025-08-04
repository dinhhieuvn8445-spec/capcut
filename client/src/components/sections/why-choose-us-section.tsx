import { HandHeart, GraduationCap, Zap, Headphones, TrendingUp, DollarSign } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: HandHeart,
      title: "Chúng tôi dạy thực chiến – không lý thuyết suông",
      description: "Mỗi bài học là một tình huống thực tế, giúp bạn ứng dụng ngay vào công việc hoặc cuộc sống.",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Giảng viên có kinh nghiệm thực tế",
      description: "Từng người đều là chuyên gia đã dùng CapCut để tạo ra hàng trăm video viral, bán hàng thành công.",
      color: "bg-orange-500"
    },
    {
      icon: Zap,
      title: "Học nhanh – làm được liền",
      description: "Chỉ sau vài giờ, bạn có thể tự tin dựng video đẹp mắt, chuyên nghiệp ngay trên điện thoại.",
      color: "bg-green-500"
    },
    {
      icon: Headphones,
      title: "Hỗ trợ cá nhân tận tâm",
      description: "Học viên được hướng dẫn 1-1 nếu cần, hỏi là có người trả lời, hỗ trợ đến khi làm được.",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Cập nhật liên tục theo trend mới nhất",
      description: "Được cập nhật các mẹo, hiệu ứng và thủ thuật mới đang hot trên TikTok, Reels...",
      color: "bg-pink-500"
    },
    {
      icon: DollarSign,
      title: "Chi phí hợp lý – Giá trị vượt trội",
      description: "Một lần học, dùng trọn đời. So với việc thuê editor hay mua app trả phí, đây là khoản đầu tư tiết kiệm.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Tại sao chọn chúng tôi</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            HDT AI là nơi bạn học đúng – làm thật – có kết quả. Chúng tôi không dạy lý thuyết suông mà hướng dẫn thực chiến.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-8 h-8 ${reason.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <reason.icon className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
              alt="Digital marketing course environment" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
