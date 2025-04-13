import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    res.json(await assignmentsDao.getAssignmentById(assignmentId));
  });
  app.post("/api/assignments", async (req, res) => {
    res.json(await assignmentsDao.createAssignment(req.body));
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    res.json(await assignmentsDao.updateAssignment(assignmentId, req.body));
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.get("/api/assignments", async (req, res) => {
    res.json(await assignmentsDao.getAllAssignments());
  });
}
