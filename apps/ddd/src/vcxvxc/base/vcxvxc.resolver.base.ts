/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteVcxvxcArgs } from "./DeleteVcxvxcArgs";
import { VcxvxcCountArgs } from "./VcxvxcCountArgs";
import { VcxvxcFindManyArgs } from "./VcxvxcFindManyArgs";
import { VcxvxcFindUniqueArgs } from "./VcxvxcFindUniqueArgs";
import { Vcxvxc } from "./Vcxvxc";
import { VcxvxcService } from "../vcxvxc.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vcxvxc)
export class VcxvxcResolverBase {
  constructor(
    protected readonly service: VcxvxcService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vcxvxc",
    action: "read",
    possession: "any",
  })
  async _vcxvxcsMeta(
    @graphql.Args() args: VcxvxcCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vcxvxc])
  @nestAccessControl.UseRoles({
    resource: "Vcxvxc",
    action: "read",
    possession: "any",
  })
  async vcxvxcs(@graphql.Args() args: VcxvxcFindManyArgs): Promise<Vcxvxc[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vcxvxc, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vcxvxc",
    action: "read",
    possession: "own",
  })
  async vcxvxc(
    @graphql.Args() args: VcxvxcFindUniqueArgs
  ): Promise<Vcxvxc | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Vcxvxc)
  @nestAccessControl.UseRoles({
    resource: "Vcxvxc",
    action: "delete",
    possession: "any",
  })
  async deleteVcxvxc(
    @graphql.Args() args: DeleteVcxvxcArgs
  ): Promise<Vcxvxc | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
