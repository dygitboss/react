import axios from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import config from '../config';

interface Request {
  url: string;
}

function onRequest(request: Request) {
  // intercept a request here
  request.url = config.api.url + request.url;
  return request;
}

export default function* rootSaga() {
  yield createRequestInstance({
    onRequest,
    driver: createDriver(axios),
  });
  yield watchRequests();
}
