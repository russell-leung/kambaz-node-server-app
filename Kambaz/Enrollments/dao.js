import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  return await model
    .find({ course: courseId })
    .populate("user")
    .then((enrollments) => enrollments.map((enrollment) => enrollment.user));
}

export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

export async function findEnrollment(userId, courseId) {
  const enrollment = await model.findOne({
    user: userId,
    course: courseId,
  });
  return enrollment;
}

export async function deleteEnrollmentsForCourse(courseId) {
  return model.deleteMany({ course: courseId });
}