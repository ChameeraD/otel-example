import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CourierModuleBase } from "./base/courier.module.base";
import { CourierService } from "./courier.service";
import { CourierController } from "./courier.controller";
import { CourierResolver } from "./courier.resolver";

@Module({
  imports: [CourierModuleBase, forwardRef(() => AuthModule)],
  controllers: [CourierController],
  providers: [CourierService, CourierResolver],
  exports: [CourierService],
})
export class CourierModule {}
