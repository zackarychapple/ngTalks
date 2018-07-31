import { async, TestBed } from '@angular/core/testing';
import { DesignSystemModule } from './design-system.module';

describe('DesignSystemModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [DesignSystemModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(DesignSystemModule).toBeDefined();
  });
});
