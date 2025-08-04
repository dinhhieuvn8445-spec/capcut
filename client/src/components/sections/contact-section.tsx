import CourseRegistrationForm from "@/components/course-registration-form";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">ĐĂNG KÝ TƯ VẤN NGAY!</h2>
          <p className="text-xl text-blue-100">
            Hãy liên hệ với chuyên viên tư vấn của HDT AI để giải đáp ngay các khúc mắc của bạn!
          </p>
        </div>

        <CourseRegistrationForm />

        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Liên hệ với chúng tôi</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Thông tin liên hệ</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hotline</h4>
                    <p className="text-blue-100">+84 33 473 4875</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-blue-100">gattsvn@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Địa chỉ</h4>
                    <p className="text-blue-100">203 Bế Văn Đàn-Quang Trung-Đống Đa-Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Thời gian làm việc</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-blue-100">Thứ 2 - Thứ 6:</span>
                  <span className="font-medium text-white">8AM - 5PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Thứ 7:</span>
                  <span className="font-medium text-white">8AM - 11AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Chủ nhật:</span>
                  <span className="font-medium text-white">Nghỉ</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Thông tin thanh toán</h3>
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Chuyển khoản ngân hàng</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Ngân hàng:</span>
                    <span className="font-medium text-white">Techcombank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Chủ TK:</span>
                    <span className="font-medium text-white">Hoang Anh Tu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Số TK:</span>
                    <span className="font-medium text-white">88043333333</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h4 className="font-semibold text-white mb-3">Tham gia cộng đồng</h4>
                  <a 
                    href="https://zalo.me/g/ylfdge520" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-colors duration-300"
                  >
                    <span className="text-blue-200 text-xl">💬</span>
                    <span className="font-medium text-blue-200">Nhóm Zalo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
