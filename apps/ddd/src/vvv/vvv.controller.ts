import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VvvService } from "./vvv.service";
import { VvvControllerBase } from "./base/vvv.controller.base";

@swagger.ApiTags("vvvs")
@common.Controller("vvvs")
export class VvvController extends VvvControllerBase {
  constructor(
    protected readonly service: VvvService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
