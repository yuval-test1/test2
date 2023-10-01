import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VcxvxcResolverBase } from "./base/vcxvxc.resolver.base";
import { Vcxvxc } from "./base/Vcxvxc";
import { VcxvxcService } from "./vcxvxc.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vcxvxc)
export class VcxvxcResolver extends VcxvxcResolverBase {
  constructor(
    protected readonly service: VcxvxcService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
