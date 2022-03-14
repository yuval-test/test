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
import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  specialEvents?: EventCreateNestedManyWithoutCustomersInput;
}
export { CustomerCreateInput };
