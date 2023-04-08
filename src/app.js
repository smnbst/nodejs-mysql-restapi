import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use('/api',employeesRoutes);

//En caso de que la ruta que coloquen no exista
app.use((req, res, next) => {
    res.status(400).json({
        message: 'EndPoint not found'
    });
});

export default app;