import { type Course, type InsertCourse, type Instructor, type InsertInstructor, type Registration, type InsertRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Instructors
  getInstructors(): Promise<Instructor[]>;
  getInstructor(id: string): Promise<Instructor | undefined>;
  createInstructor(instructor: InsertInstructor): Promise<Instructor>;

  // Registrations
  getRegistrations(): Promise<Registration[]>;
  getRegistration(id: string): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
}

export class MemStorage implements IStorage {
  private courses: Map<string, Course>;
  private instructors: Map<string, Instructor>;
  private registrations: Map<string, Registration>;

  constructor() {
    this.courses = new Map();
    this.instructors = new Map();
    this.registrations = new Map();

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample courses
    const basicCourse: Course = {
      id: randomUUID(),
      name: "CapCut Cơ Bản",
      price: 500000,
      description: "Khóa học CapCut cơ bản dành cho người mới bắt đầu",
      features: ["Hướng dẫn cơ bản CapCut", "Cắt ghép video đơn giản", "Thêm nhạc và hiệu ứng", "Hỗ trợ trong 30 ngày"],
      isPopular: false,
      createdAt: new Date(),
    };

    const advancedCourse: Course = {
      id: randomUUID(),
      name: "CapCut Nâng Cao",
      price: 500000,
      description: "Khóa học CapCut nâng cao cho người muốn chuyên nghiệp",
      features: ["Tất cả tính năng cơ bản", "Hiệu ứng chuyên nghiệp", "Chuyển giọng AI", "Phụ đề tự động", "Hỗ trợ trọn đời"],
      isPopular: true,
      createdAt: new Date(),
    };

    const comboCourse: Course = {
      id: randomUUID(),
      name: "Full Combo CapCut",
      price: 1000000,
      originalPrice: 1200000,
      description: "Combo đầy đủ tất cả khóa học CapCut",
      features: ["Tất cả khóa học", "Bonus: Marketing video", "Template premium", "Cộng đồng VIP", "Hỗ trợ 1-1 unlimited"],
      isPopular: false,
      createdAt: new Date(),
    };

    this.courses.set(basicCourse.id, basicCourse);
    this.courses.set(advancedCourse.id, advancedCourse);
    this.courses.set(comboCourse.id, comboCourse);

    // Sample instructors
    const instructor1: Instructor = {
      id: randomUUID(),
      name: "Hoàng Tú",
      title: "Giảng Viên HDTAI",
      description: "Đã giảng dạy về các công cụ hỗ trợ Marketing, các công cụ AI như Leonardo AI, KlingAI, Digen, HeyGen, D-ID, Video-Gen... và các công cụ hỗ trợ viết content, xử lý hình ảnh, videos, âm thanh.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      createdAt: new Date(),
    };

    const instructor2: Instructor = {
      id: randomUUID(),
      name: "Thanh Hải",
      title: "Giảng Viên HDTAI",
      description: "Xử lý kỹ thuật từ chuyển giọng, sub auto, auto đăng video, đến tạo chatbot trả lời comment, hệ thống hóa quy trình dựng & đăng video. Thành thạo Make, ChatGPT, API, Google Sheets.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      createdAt: new Date(),
    };

    const instructor3: Instructor = {
      id: randomUUID(),
      name: "HPT",
      title: "Giảng Viên HDTAI",
      description: "Người đứng sau hàng loạt video AI viral, chuyên kết hợp các công cụ như HeyGen, Suno, Pika Labs, CapCut, Canva, ChatGPT... để tạo nên hệ sinh thái nội dung toàn diện.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
      createdAt: new Date(),
    };

    this.instructors.set(instructor1.id, instructor1);
    this.instructors.set(instructor2.id, instructor2);
    this.instructors.set(instructor3.id, instructor3);
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { ...insertCourse, id, createdAt: new Date() };
    this.courses.set(id, course);
    return course;
  }

  // Instructors
  async getInstructors(): Promise<Instructor[]> {
    return Array.from(this.instructors.values());
  }

  async getInstructor(id: string): Promise<Instructor | undefined> {
    return this.instructors.get(id);
  }

  async createInstructor(insertInstructor: InsertInstructor): Promise<Instructor> {
    const id = randomUUID();
    const instructor: Instructor = { ...insertInstructor, id, createdAt: new Date() };
    this.instructors.set(id, instructor);
    return instructor;
  }

  // Registrations
  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async getRegistration(id: string): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = randomUUID();
    const registration: Registration = { ...insertRegistration, id, createdAt: new Date() };
    this.registrations.set(id, registration);
    return registration;
  }
}

export const storage = new MemStorage();
