import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments/:assignmentId", (req, res) => {
    const assignmentId = req.params.assignmentId;
    res.json(assignmentsDao.getAssignmentById(assignmentId));
  });
  app.post("/api/assignments", (req, res) => {
    res.json(assignmentsDao.createAssignment(req.body));
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const assignmentId = req.params.assignmentId;
    res.json(assignmentsDao.updateAssignment(assignmentId, req.body));
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const assignmentId = req.params.assignmentId;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
}
