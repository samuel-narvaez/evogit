import { Application } from 'express'
import employeesRouter from './employeesRouter';
import contractorsRouter from './contractorsRouter';
import jobsRouter from './jobsRouter';

export default  (app : Application): void  => {
    app.use('/api/v1/employees', employeesRouter);
    app.use('/api/v1/contractors', contractorsRouter);
    app.use('/api/v1/jobs', jobsRouter);
}