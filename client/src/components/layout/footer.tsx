import { Video } from "lucide-react";
import hdtaiLogo from "@assets/logo_cty-removebg_1754316937722.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={hdtaiLogo} 
                alt="HDT AI Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold">HDT AI</h2>
                <p className="text-slate-400 text-sm">Công ty cổ phần thương mại điện tử HDT AI</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              HDT AI là nơi bạn học đúng – làm thật – có kết quả. Chúng tôi không dạy lý thuyết suông mà hướng dẫn thực chiến, 
              dễ hiểu, áp dụng ngay. Học một lần, dùng cả sự nghiệp.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Khóa học</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">CapCut cơ bản</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CapCut nâng cao</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Full combo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Chính sách & Bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 HDT AI. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Cập nhật lần cuối: 02/07/2025
          </p>
        </div>
      </div>
    </footer>
  );
}
