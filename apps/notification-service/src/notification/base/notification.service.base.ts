/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Notification } from "@prisma/client";

export class NotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NotificationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationCountArgs>
  ): Promise<number> {
    return this.prisma.notification.count(args);
  }

  async findMany<T extends Prisma.NotificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationFindManyArgs>
  ): Promise<Notification[]> {
    return this.prisma.notification.findMany(args);
  }
  async findOne<T extends Prisma.NotificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationFindUniqueArgs>
  ): Promise<Notification | null> {
    return this.prisma.notification.findUnique(args);
  }
  async create<T extends Prisma.NotificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationCreateArgs>
  ): Promise<Notification> {
    return this.prisma.notification.create<T>(args);
  }
  async update<T extends Prisma.NotificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationUpdateArgs>
  ): Promise<Notification> {
    return this.prisma.notification.update<T>(args);
  }
  async delete<T extends Prisma.NotificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationDeleteArgs>
  ): Promise<Notification> {
    return this.prisma.notification.delete(args);
  }
}
