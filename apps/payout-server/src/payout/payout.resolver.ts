import * as graphql from "@nestjs/graphql";
import { PayoutResolverBase } from "./base/payout.resolver.base";
import { Payout } from "./base/Payout";
import { PayoutService } from "./payout.service";

@graphql.Resolver(() => Payout)
export class PayoutResolver extends PayoutResolverBase {
  constructor(protected readonly service: PayoutService) {
    super(service);
  }
}
