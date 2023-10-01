import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VvvModuleBase } from "./base/vvv.module.base";
import { VvvService } from "./vvv.service";
import { VvvController } from "./vvv.controller";
import { VvvResolver } from "./vvv.resolver";

@Module({
  imports: [VvvModuleBase, forwardRef(() => AuthModule)],
  controllers: [VvvController],
  providers: [VvvService, VvvResolver],
  exports: [VvvService],
})
export class VvvModule {}
