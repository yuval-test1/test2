import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SsssModuleBase } from "./base/ssss.module.base";
import { SsssService } from "./ssss.service";
import { SsssController } from "./ssss.controller";
import { SsssResolver } from "./ssss.resolver";

@Module({
  imports: [SsssModuleBase, forwardRef(() => AuthModule)],
  controllers: [SsssController],
  providers: [SsssService, SsssResolver],
  exports: [SsssService],
})
export class SsssModule {}
