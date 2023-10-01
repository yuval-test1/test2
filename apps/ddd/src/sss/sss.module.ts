import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SssModuleBase } from "./base/sss.module.base";
import { SssService } from "./sss.service";
import { SssController } from "./sss.controller";
import { SssResolver } from "./sss.resolver";

@Module({
  imports: [SssModuleBase, forwardRef(() => AuthModule)],
  controllers: [SssController],
  providers: [SssService, SssResolver],
  exports: [SssService],
})
export class SssModule {}
