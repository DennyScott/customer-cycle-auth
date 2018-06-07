import { OAuthTokens } from '../models/auth';
import Stores from '../models/store';

const getStoreFromAuthToken = authToken => {
  //Get userId here, then look up value in tokens model. Only return needed data (not password)
  return OAuthTokens.findOne({ accessToken: authToken });
};

const getStoreById = storeId => {
  return Stores.findById(storeId);
};

export { getStoreFromAuthToken, getStoreById };
