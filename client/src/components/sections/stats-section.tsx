export default function StatsSection() {
  const stats = [
    { value: "3,750", label: "Khách hàng trung thành" },
    { value: "451", label: "Dự án hoàn thành" },
    { value: "25", label: "Khóa học chuyên sâu" },
    { value: "345", label: "Đối tác Quốc tế" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
