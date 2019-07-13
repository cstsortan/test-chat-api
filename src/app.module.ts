import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TestChatResolver } from './test-chat.resolver';
import { PrismaService } from './services/prisma.service';
import { TestMessagesService } from './services/test-messages.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.sql",
      installSubscriptionHandlers: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, TestChatResolver, PrismaService, TestMessagesService],
})
export class AppModule { }
