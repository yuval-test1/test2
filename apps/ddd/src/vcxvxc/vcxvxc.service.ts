import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VcxvxcServiceBase } from "./base/vcxvxc.service.base";

@Injectable()
export class VcxvxcService extends VcxvxcServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
