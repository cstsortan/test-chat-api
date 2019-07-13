import { Resolver, Query, Mutation, Subscription, Args } from "@nestjs/graphql";
import { TestMessage } from "./models/test-message";
import { TestMessagesService } from "./services/test-messages.service";

@Resolver()
export class TestChatResolver {

    constructor(
        private readonly testMessagesService: TestMessagesService,
    ) {}

    @Query(returns => [TestMessage])
    async testMessages(): Promise<TestMessage[]> {
        return this.testMessagesService.getTestMessages();
    }

    @Mutation(returns => TestMessage)
    async sendMessage(@Args('text') text: string, @Args('author') author: string) {
        return this.testMessagesService.createMessage(text, author);
    }

    @Subscription(returns => TestMessage, {
        resolve: value => value,
        defaultValue: {
            id: "some-id",
            author: 'someone',
            text: 'something'
        } as TestMessage,
        nullable: true,
    })
    testMessageSent(): AsyncIterator<TestMessage> {
        return this.testMessagesService.prisma.$subscribe.testMessage({
            mutation_in: 'CREATED',
        }).node()
    }
}