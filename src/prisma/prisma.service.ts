import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./prisma.js";
import pg from "pg";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString: string | undefined = process.env.DATABASE_URL;
    if (!connectionString) throw new Error("connectionString is undefined");

    const pool = new pg.Pool({ connectionString, max: 10, ssl: true });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log("Connect successfull.");
    } catch (error) {
      console.log(error);
    }
  }
  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log("Disconnect safety.");
    } catch (error) {
      console.log(error);
    }
  }
}
