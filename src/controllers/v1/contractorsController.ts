import { Request, Response } from 'express';
import Contractor from '../../models/contractorsModel';
import {Success , InternalServerError} from '../../classes/classResponse'

const ENDPOINT_ROOT = '/contractors';

export default {
    async get(req: Request, res: Response) {
        try {
            let data = await Contractor.find();
            return res.json(Success(data , ENDPOINT_ROOT , 'Datos Obtenidos Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async post(req: Request, res: Response) {
        const { name, lastname, nit, birth_date, address, phone, email, company } = req.body;
        try {
            const data = await Contractor.create({
                    name,
                    lastname,
                    nit,
                    birth_date,
                    address,
                    phone,
                    email,
                    company
                });
                return res.json(Success(data , ENDPOINT_ROOT , 'Contratista Guardado Correctamente'));
        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.json(InternalServerError(ENDPOINT_ROOT, error.keyValue));
            }
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async put(req: Request, res: Response) {
        const idContractor = req.params.idContractor;
        const { name, lastname, nit, birth_date, address, phone, email, company } = req.body;
        try {
            await Contractor.findByIdAndUpdate(idContractor, {
                name,
                lastname,
                nit,
                birth_date,
                address,
                phone,
                email,
                company
            });
            return res.json(Success(null , ENDPOINT_ROOT , 'Contratista Actualizado Correctamente'));
        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.json(InternalServerError(ENDPOINT_ROOT, error.keyValue));
            }

            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async delete(req: Request, res: Response) {
        const idContractor = req.params.idContractor;
        try {
            await Contractor.findByIdAndDelete(idContractor);
            return res.json(Success(null , ENDPOINT_ROOT , 'Contratista Eliminado Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    }
}