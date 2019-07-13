import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma } from "generated/prisma-client";
import { TestMessage } from "src/models/test-message";

@Injectable()
export class TestMessagesService {
    
    prisma: Prisma;
    constructor(
        prismaService: PrismaService,
    ) {
        this.prisma = prismaService.getPrisma();
    }

    getTestMessages(): Promise<TestMessage[]> {
        return this.prisma.testMessages();
    }

    createMessage(text: string, author: string) {
        return this.prisma.createTestMessage({
            text,
            author,
        });
    }
}