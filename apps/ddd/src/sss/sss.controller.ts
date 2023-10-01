import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SssService } from "./sss.service";
import { SssControllerBase } from "./base/sss.controller.base";

@swagger.ApiTags("ssses")
@common.Controller("ssses")
export class SssController extends SssControllerBase {
  constructor(
    protected readonly service: SssService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
