import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayoutService } from "./payout.service";
import { PayoutControllerBase } from "./base/payout.controller.base";

@swagger.ApiTags("payouts")
@common.Controller("payouts")
export class PayoutController extends PayoutControllerBase {
  constructor(protected readonly service: PayoutService) {
    super(service);
  }
}
