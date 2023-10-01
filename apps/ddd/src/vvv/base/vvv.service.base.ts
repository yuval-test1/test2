/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Vvv } from "@prisma/client";

export class VvvServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VvvCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvCountArgs>
  ): Promise<number> {
    return this.prisma.vvv.count(args);
  }

  async findMany<T extends Prisma.VvvFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvFindManyArgs>
  ): Promise<Vvv[]> {
    return this.prisma.vvv.findMany(args);
  }
  async findOne<T extends Prisma.VvvFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvFindUniqueArgs>
  ): Promise<Vvv | null> {
    return this.prisma.vvv.findUnique(args);
  }
  async create<T extends Prisma.VvvCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvCreateArgs>
  ): Promise<Vvv> {
    return this.prisma.vvv.create<T>(args);
  }
  async update<T extends Prisma.VvvUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvUpdateArgs>
  ): Promise<Vvv> {
    return this.prisma.vvv.update<T>(args);
  }
  async delete<T extends Prisma.VvvDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VvvDeleteArgs>
  ): Promise<Vvv> {
    return this.prisma.vvv.delete(args);
  }
}
