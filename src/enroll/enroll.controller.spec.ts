import { Test, TestingModule } from "@nestjs/testing";
import { EnrollController } from "./enroll.controller.js";
import { EnrollService } from "./enroll.service.js";

describe("EnrollController", () => {
  let controller: EnrollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollController],
      providers: [EnrollService],
    }).compile();

    controller = module.get<EnrollController>(EnrollController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
