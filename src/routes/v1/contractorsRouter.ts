import express from 'express'
import contractorController from '../../controllers/v1/contractorsController';
const router = express.Router();


//get
router.get("/", contractorController.get);

//create
router.post("/", contractorController.post);

//update
router.put("/:idContractor", contractorController.put);

//delete
router.delete("/:idContractor", contractorController.delete);

export default router;