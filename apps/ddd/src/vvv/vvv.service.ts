import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VvvServiceBase } from "./base/vvv.service.base";

@Injectable()
export class VvvService extends VvvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
