import {Controller, Get, Route, Tags,} from "tsoa";
import serverInfo from "../services/status.service";
import ServerInfo from "../interfaces/status/server-info.interface";
import GenericResponse from "../interfaces/generic-response.interface";

@Route('status')
@Tags('Status')
export class StatusController extends Controller {

    /**
     * @summary Retrieves server information.
     */
    @Get('/serverInfo')
    public async serverInfo(): Promise<GenericResponse<ServerInfo>> {
        try {
            this.setStatus(200);
            return {
                data: serverInfo,
                message: 'Server is running'
            };
        } catch (error) {
            this.setStatus(500);
            throw error;
        }
    }

}
