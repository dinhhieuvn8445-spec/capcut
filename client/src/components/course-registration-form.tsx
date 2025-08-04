import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertRegistrationSchema, type InsertRegistration } from "@shared/schema";
import { Send } from "lucide-react";
import { z } from "zod";

const formSchema = insertRegistrationSchema.extend({
  name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

const courseOptions = [
  { value: "basic", label: "Khóa học CapCut cơ bản - 500K" },
  { value: "advanced", label: "Khóa học CapCut nâng cao - 500K" },
  { value: "combo", label: "Full combo CapCut - 1000K" },
];

export default function CourseRegistrationForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      courseId: "",
      message: "",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest("POST", "/api/registrations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Có lỗi xảy ra",
        description: error.message || "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    registrationMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Họ và tên *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Nhập họ và tên của bạn"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-orange-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Số điện thoại *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-orange-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-orange-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="courseId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Chọn khóa học quan tâm</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/20 text-white focus:ring-2 focus:ring-orange-400">
                    <SelectValue placeholder="-- Chọn khóa học --" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courseOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tin nhắn</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  placeholder="Chia sẻ mong muốn hoặc câu hỏi của bạn..."
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-orange-400 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={registrationMutation.isPending}
          className="w-full gradient-accent hover:opacity-90 text-white font-semibold py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <Send className="mr-2" size={16} />
          {registrationMutation.isPending ? "Đang gửi..." : "Gửi đăng ký ngay"}
        </Button>
      </form>
    </Form>
  );
}
