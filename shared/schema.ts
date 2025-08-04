import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  originalPrice: integer("original_price"),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  isPopular: boolean("is_popular").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const instructors = pgTable("instructors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  courseId: varchar("course_id"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
});

export const insertInstructorSchema = createInsertSchema(instructors).omit({
  id: true,
  createdAt: true,
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
});

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Instructor = typeof instructors.$inferSelect;
export type InsertInstructor = z.infer<typeof insertInstructorSchema>;
export type Registration = typeof registrations.$inferSelect;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
