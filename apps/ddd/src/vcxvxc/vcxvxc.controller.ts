import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VcxvxcService } from "./vcxvxc.service";
import { VcxvxcControllerBase } from "./base/vcxvxc.controller.base";

@swagger.ApiTags("vcxvxcs")
@common.Controller("vcxvxcs")
export class VcxvxcController extends VcxvxcControllerBase {
  constructor(
    protected readonly service: VcxvxcService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
