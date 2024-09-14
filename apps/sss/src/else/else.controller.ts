import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ElseService } from "./else.service";

@swagger.ApiTags("elses")
@common.Controller("elses")
export class ElseController {
  constructor(protected readonly service: ElseService) {}
}
