/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class QuoteCountArgs {
  @ApiProperty({
    required: false,
    type: () => QuoteWhereInput,
  })
  @Field(() => QuoteWhereInput, { nullable: true })
  @Type(() => QuoteWhereInput)
  where?: QuoteWhereInput;
}

export { QuoteCountArgs as QuoteCountArgs };
