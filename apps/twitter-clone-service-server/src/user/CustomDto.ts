import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("CustomDtoObject")
class CustomDto {
    @Field(() => GraphQLJSON)
    id!: InputJsonValue;
}

export { CustomDto as CustomDto };