import { Module } from "@nestjs/common";
import { EnrollService } from "./enroll.service.js";
import { EnrollController } from "./enroll.controller.js";

@Module({
  controllers: [EnrollController],
  providers: [EnrollService],
})
export class EnrollModule {}
