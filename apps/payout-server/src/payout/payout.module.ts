import { Module } from "@nestjs/common";
import { PayoutModuleBase } from "./base/payout.module.base";
import { PayoutService } from "./payout.service";
import { PayoutController } from "./payout.controller";
import { PayoutResolver } from "./payout.resolver";

@Module({
  imports: [PayoutModuleBase],
  controllers: [PayoutController],
  providers: [PayoutService, PayoutResolver],
  exports: [PayoutService],
})
export class PayoutModule {}
