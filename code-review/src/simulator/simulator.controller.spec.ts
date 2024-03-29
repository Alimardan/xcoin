import { Test, TestingModule } from '@nestjs/testing';
import { SimulatorController } from './simulator.controller';
import { SimulatorService } from './simulator.service';

describe('SimulatorController', () => {
  let controller: SimulatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimulatorController],
      providers: [SimulatorService],
    }).compile();

    controller = module.get<SimulatorController>(SimulatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
