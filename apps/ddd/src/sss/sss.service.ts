import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SssServiceBase } from "./base/sss.service.base";

@Injectable()
export class SssService extends SssServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
