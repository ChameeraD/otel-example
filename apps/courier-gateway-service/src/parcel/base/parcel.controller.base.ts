/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ParcelService } from "../parcel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ParcelCreateInput } from "./ParcelCreateInput";
import { ParcelWhereInput } from "./ParcelWhereInput";
import { ParcelWhereUniqueInput } from "./ParcelWhereUniqueInput";
import { ParcelFindManyArgs } from "./ParcelFindManyArgs";
import { ParcelUpdateInput } from "./ParcelUpdateInput";
import { Parcel } from "./Parcel";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ParcelControllerBase {
  constructor(
    protected readonly service: ParcelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Parcel })
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ParcelCreateInput): Promise<Parcel> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        maxDimension: true,
        parcelType: true,
        price: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Parcel] })
  @ApiNestedQuery(ParcelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Parcel[]> {
    const args = plainToClass(ParcelFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        maxDimension: true,
        parcelType: true,
        price: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Parcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ParcelWhereUniqueInput
  ): Promise<Parcel | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        maxDimension: true,
        parcelType: true,
        price: true,
        updatedAt: true,
        weight: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Parcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ParcelWhereUniqueInput,
    @common.Body() data: ParcelUpdateInput
  ): Promise<Parcel | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          maxDimension: true,
          parcelType: true,
          price: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Parcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ParcelWhereUniqueInput
  ): Promise<Parcel | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          maxDimension: true,
          parcelType: true,
          price: true,
          updatedAt: true,
          weight: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/quotes")
  @ApiNestedQuery(QuoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async findManyQuotes(
    @common.Req() request: Request,
    @common.Param() params: ParcelWhereUniqueInput
  ): Promise<Quote[]> {
    const query = plainToClass(QuoteFindManyArgs, request.query);
    const results = await this.service.findQuotes(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        parcel: {
          select: {
            id: true,
          },
        },

        price: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "update",
    possession: "any",
  })
  async connectQuotes(
    @common.Param() params: ParcelWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "update",
    possession: "any",
  })
  async updateQuotes(
    @common.Param() params: ParcelWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quotes")
  @nestAccessControl.UseRoles({
    resource: "Parcel",
    action: "update",
    possession: "any",
  })
  async disconnectQuotes(
    @common.Param() params: ParcelWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}