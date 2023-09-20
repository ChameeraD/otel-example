/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourierWhereInput } from "./CourierWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CourierListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereInput)
  @IsOptional()
  @Field(() => CourierWhereInput, {
    nullable: true,
  })
  every?: CourierWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereInput)
  @IsOptional()
  @Field(() => CourierWhereInput, {
    nullable: true,
  })
  some?: CourierWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereInput)
  @IsOptional()
  @Field(() => CourierWhereInput, {
    nullable: true,
  })
  none?: CourierWhereInput;
}
export { CourierListRelationFilter as CourierListRelationFilter };