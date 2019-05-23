import { TestBed } from '@angular/core/testing';

import { WeChatShareService } from './we-chat-share.service';

describe('WeChatShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeChatShareService = TestBed.get(WeChatShareService);
    expect(service).toBeTruthy();
  });
});
