import { Injectable } from "@nestjs/common";
import { Prisma, prisma } from "../../generated/prisma-client";

@Injectable()
export class PrismaService {
    getPrisma(): Prisma {
        return prisma;
    }
}