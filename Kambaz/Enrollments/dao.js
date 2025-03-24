import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function getUserEnrollments(userId) {
  return Database.enrollments.filter((enrollment) => enrollment.user === userId);
}

export function addEnrollment(enrollment) {
  const newEnrollment = { ...enrollment };
  Database.enrollments = [...Database.enrollments, newEnrollment];
  return newEnrollment;
}

export function deleteEnrollment(enrollmentId) {
  Database.enrollments = Database.enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
}

export function getAllEnrollments() {
  return Database.enrollments;
}