import { Request, Response } from 'express';
import Employees from '../../models/employeesModel';
import {Success , InternalServerError} from '../../classes/classResponse';

const ENDPOINT_ROOT = '/employees';


export default {
    async get(req: Request, res: Response) {
        try {
            let data = await Employees.find();
            return res.json(Success(data , ENDPOINT_ROOT , 'Datos Obtenidos Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async post(req: Request, res: Response) {
        const { name, lastname, nit, type_contract, birth_date, address, phone, email } = req.body;
        try {
            const data = await Employees.create({
                name,
                lastname,
                nit,
                type_contract,
                birth_date,
                address,
                phone,
                email
            });
            return res.json(Success(data , ENDPOINT_ROOT , 'Empleado Guardado Correctamente'));
        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.json(InternalServerError(ENDPOINT_ROOT, error.keyValue));
            }
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async put(req: Request, res: Response) {
        const idEmployees = req.params.idEmployees;
        const { name, lastname, nit, type_contract, birth_date, address, phone, email } = req.body;
        try {
            await Employees.findByIdAndUpdate(idEmployees, {
                name,
                lastname,
                nit,
                type_contract,
                birth_date,
                address,
                phone,
                email
            });
            return res.json(Success(null , ENDPOINT_ROOT , 'Empleado Actualizado Correctamente'));
        } catch (error) {
            if (error.code && error.code === 11000) {
                return res.json(InternalServerError(ENDPOINT_ROOT, error.keyValue));
            }

            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    },

    async delete(req: Request, res: Response) {
        const idEmployees = req.params.idEmployees;
        try {
            await Employees.findByIdAndDelete(idEmployees);
            return res.json(Success(null , ENDPOINT_ROOT , 'Contratista Eliminado Correctamente'));
        } catch (error) {
            return res.json(InternalServerError(ENDPOINT_ROOT, error.message));
        }
    }
}