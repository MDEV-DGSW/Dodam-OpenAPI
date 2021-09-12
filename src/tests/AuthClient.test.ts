import sinon from 'sinon';
import { AuthClient } from '..';
import { DodamAPI } from '../api';

describe('AuthClient Config', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  test('생성자로 넘긴 Config 값을 활용하여 요청한다.', async () => {
    const stub = sandbox.stub(DodamAPI, 'getToken')
      .resolves(true as any);

    const client = new AuthClient({
      clientId: 'test-clientId',
      clientSecret: 'test-clientSecret',
    });

    const result = await client.getToken('test-code');
    expect(result).toBe(true);
    expect(stub.called).toBe(true);
    expect(stub.getCall(0).args).toStrictEqual(['test-code', 'test-clientId', 'test-clientSecret']);
  });
})