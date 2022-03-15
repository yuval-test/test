/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EventUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => EventUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => EventUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  specialEvents?: EventUpdateManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}
export { CustomerUpdateInput };
