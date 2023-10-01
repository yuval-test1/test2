import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsssServiceBase } from "./base/ssss.service.base";

@Injectable()
export class SsssService extends SsssServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
