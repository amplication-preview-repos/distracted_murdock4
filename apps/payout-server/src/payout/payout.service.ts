import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayoutServiceBase } from "./base/payout.service.base";

@Injectable()
export class PayoutService extends PayoutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
