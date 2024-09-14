import { Module } from "@nestjs/common";
import { ElseService } from "./else.service";
import { ElseController } from "./else.controller";
import { ElseResolver } from "./else.resolver";

@Module({
  controllers: [ElseController],
  providers: [ElseService, ElseResolver],
  exports: [ElseService],
})
export class ElseModule {}
