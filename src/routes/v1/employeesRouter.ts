import express from 'express';

import employeesController from '../../controllers/v1/employeesController';

const router = express.Router();

//get
router.get("/", employeesController.get);

//create
router.post("/", employeesController.post);

//update
router.put("/:idEmployees", employeesController.put);

//delete
router.delete("/:idEmployees", employeesController.delete);

export default router;