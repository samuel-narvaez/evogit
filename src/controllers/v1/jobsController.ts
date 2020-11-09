import { Request, Response } from 'express';
import Jobs from '../../models/jobsModel';
import { Success, InternalServerError } from '../../classes/classResponse'

const ENDPOINT_ROOT = '/jobs';

export default {
    async get(req: Request, res: Response) {
        try {
            let data = await Jobs.find();
            return res.json(Success(data, ENDPOINT_ROOT, 'Datos Obtenidos Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async post(req: Request, res: Response) {
        const { employees, contractors, hour_to_work, start_date, name_jobs, worked_time } = req.body;
        try {
            const data = await Jobs.create({
                employees,
                contractors,
                hour_to_work,
                start_date,
                name_jobs,
                worked_time
            });
            return res.json(Success(data, ENDPOINT_ROOT, 'Guardado Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async put(req: Request, res: Response) {
        const idJobs = req.params.idJobs;
        const { employees, contractors, hour_to_work, start_date, name_jobs, worked_time } = req.body;
        try {
            await Jobs.findByIdAndUpdate(idJobs, {
                employees,
                contractors,
                hour_to_work,
                start_date,
                name_jobs,
                worked_time
            });
            return res.json(Success(null, ENDPOINT_ROOT, 'Actualizado Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async delete(req: Request, res: Response) {
        const idJobs = req.params.idJobs;
        try {
            await Jobs.findByIdAndDelete(idJobs);
            return res.json(Success(null, ENDPOINT_ROOT, 'Eliminado Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    }
}