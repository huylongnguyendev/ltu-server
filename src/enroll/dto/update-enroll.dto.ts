import { PartialType } from "@nestjs/mapped-types";
import { CreateEnrollDto } from "./create-enroll.dto.js";

export class UpdateEnrollDto extends PartialType(CreateEnrollDto) {}
