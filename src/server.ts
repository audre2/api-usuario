import app from "./app";
import * as swaggerUi from 'swagger-ui-express';
import {swaggerDocument} from "./swagger/doc";

const PORT = 3000;

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})