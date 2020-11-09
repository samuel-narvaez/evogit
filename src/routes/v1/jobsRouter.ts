import express from 'express'
import jobsController from '../../controllers/v1/jobsController';
const router = express.Router();


//get
router.get("/", jobsController.get);

//create
router.post("/", jobsController.post);

//update
router.put("/:idJobs", jobsController.put);

//delete
router.delete("/:idJobs", jobsController.delete);

export default router;