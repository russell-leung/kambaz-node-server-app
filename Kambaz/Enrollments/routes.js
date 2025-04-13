import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:uid/:cid", async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser?._id;
    }
    const enrollment = await dao.findEnrollment(uid, cid);
    res.json(enrollment);
  });
}
