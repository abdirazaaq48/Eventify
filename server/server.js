import express from "express";
import ErrorHandler from "./middlewares/error-middleware.js";
import userRoutes from "./routes/user-routes.js";
import eventRoutes from "./routes/event-routes.js";
import { sendEmail } from "./controllers/email-controller.js";
import { PORT } from "./config/config.js";
import cookieParser from "cookie-parser";

const app = express();

const Port = PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/contact", sendEmail);

app.use(ErrorHandler);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
