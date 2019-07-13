import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TestMessage {
    @Field()
    id: string;
    
    @Field()
    text: string;

    @Field()
    author: string;
}
