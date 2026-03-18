import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { ExamService } from "./exam.service.js";
import { CreateExamDto } from "./dto/create-exam.dto.js";
import { Public } from "src/auth/public.decorator.js";
import { GetExamsDto } from "./dto/get-exam.dto.js";

@Controller("exam")
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Public()
  @Post()
  async createExam(@Body() data: CreateExamDto) {
    const res = await this.examService.create(data);
    return res;
  }

  @Public()
  @Get()
  async getExams(@Req() req: GetExamsDto) {
    const res = await this.examService.findAll(req);
    return res;
  }

  // @Public()
  @Get(":id")
  async getExamById(@Param("id") id: string) {
    const res = await this.examService.findOne(id);
    return res;
  }
}
