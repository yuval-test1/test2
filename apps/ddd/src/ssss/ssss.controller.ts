import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SsssService } from "./ssss.service";
import { SsssControllerBase } from "./base/ssss.controller.base";

@swagger.ApiTags("sssses")
@common.Controller("sssses")
export class SsssController extends SsssControllerBase {
  constructor(
    protected readonly service: SsssService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
