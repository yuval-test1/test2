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
import { SssWhereInput } from "./SssWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SssListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SssWhereInput,
  })
  @ValidateNested()
  @Type(() => SssWhereInput)
  @IsOptional()
  @Field(() => SssWhereInput, {
    nullable: true,
  })
  every?: SssWhereInput;

  @ApiProperty({
    required: false,
    type: () => SssWhereInput,
  })
  @ValidateNested()
  @Type(() => SssWhereInput)
  @IsOptional()
  @Field(() => SssWhereInput, {
    nullable: true,
  })
  some?: SssWhereInput;

  @ApiProperty({
    required: false,
    type: () => SssWhereInput,
  })
  @ValidateNested()
  @Type(() => SssWhereInput)
  @IsOptional()
  @Field(() => SssWhereInput, {
    nullable: true,
  })
  none?: SssWhereInput;
}
export { SssListRelationFilter as SssListRelationFilter };
