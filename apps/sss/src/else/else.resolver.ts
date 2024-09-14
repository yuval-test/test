import * as graphql from "@nestjs/graphql";
import { ElseService } from "./else.service";

export class ElseResolver {
  constructor(protected readonly service: ElseService) {}
}
