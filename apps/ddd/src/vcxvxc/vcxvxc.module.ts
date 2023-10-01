import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VcxvxcModuleBase } from "./base/vcxvxc.module.base";
import { VcxvxcService } from "./vcxvxc.service";
import { VcxvxcController } from "./vcxvxc.controller";
import { VcxvxcResolver } from "./vcxvxc.resolver";

@Module({
  imports: [VcxvxcModuleBase, forwardRef(() => AuthModule)],
  controllers: [VcxvxcController],
  providers: [VcxvxcService, VcxvxcResolver],
  exports: [VcxvxcService],
})
export class VcxvxcModule {}
