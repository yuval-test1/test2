/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Sss, User } from "@prisma/client";

export class SssServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SssCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssCountArgs>
  ): Promise<number> {
    return this.prisma.sss.count(args);
  }

  async findMany<T extends Prisma.SssFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssFindManyArgs>
  ): Promise<Sss[]> {
    return this.prisma.sss.findMany(args);
  }
  async findOne<T extends Prisma.SssFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssFindUniqueArgs>
  ): Promise<Sss | null> {
    return this.prisma.sss.findUnique(args);
  }
  async create<T extends Prisma.SssCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssCreateArgs>
  ): Promise<Sss> {
    return this.prisma.sss.create<T>(args);
  }
  async update<T extends Prisma.SssUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssUpdateArgs>
  ): Promise<Sss> {
    return this.prisma.sss.update<T>(args);
  }
  async delete<T extends Prisma.SssDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SssDeleteArgs>
  ): Promise<Sss> {
    return this.prisma.sss.delete(args);
  }

  async getUSer(parentId: string): Promise<User | null> {
    return this.prisma.sss
      .findUnique({
        where: { id: parentId },
      })
      .uSer();
  }
}
