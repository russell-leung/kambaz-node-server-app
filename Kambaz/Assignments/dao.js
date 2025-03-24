import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function getAssignmentsForCourse(courseId) {
  return Database.assignments.filter((assignment) => assignment.course === courseId);
}

export function getAssignmentById(assignmentId) {
  return Database.assignments.find((assignment) => assignment._id === assignmentId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const assignment = Database.assignments.find((assignment) => assignment._id === assignmentId);
  if (!assignment) {
    return null;
  }
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}

export function getAllAssignments() {
  return Database.assignments;
}