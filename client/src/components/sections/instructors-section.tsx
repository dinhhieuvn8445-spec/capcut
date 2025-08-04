export default function InstructorsSection() {
  const instructors = [
    {
      name: "Hoàng Tú",
      title: "Giảng Viên HDTAI",
      description: "Đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ AI như Leonardo AI, KlingAI, Digen, HeyGen, D-ID, Video-Gen... và các công cụ hỗ trợ viết content, xử lý hình ảnh, videos, âm thanh.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Thanh Hải",
      title: "Giảng Viên HDTAI",
      description: "Xử lý kỹ thuật từ chuyển giọng, sub auto, auto đăng video, đến tạo chatbot trả lời comment, hệ thống hóa quy trình dựng & đăng video. Thành thạo Make, ChatGPT, API, Google Sheets.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      borderColor: "border-orange-500/20"
    },
    {
      name: "HPT",
      title: "Giảng Viên HDTAI",
      description: "Người đứng sau hàng loạt video AI viral, chuyên kết hợp các công cụ như HeyGen, Suno, Pika Labs, CapCut, Canva, ChatGPT... để tạo nên hệ sinh thái nội dung toàn diện.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Giảng viên khóa học</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Đội ngũ giảng viên giàu kinh nghiệm thực tế, đã tạo ra hàng nghìn video viral và thành công trong lĩnh vực AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <img 
                src={instructor.avatar}
                alt={`${instructor.name} - ${instructor.title}`}
                className={`w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 ${instructor.borderColor}`}
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{instructor.name}</h3>
              <div className="text-primary font-semibold mb-4">{instructor.title}</div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {instructor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
