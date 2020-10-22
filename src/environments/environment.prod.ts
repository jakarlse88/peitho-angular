import { domain, clientId, audience, athenaUrl } from '../../auth.prod.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    audience,
    redirectUri: window.location.origin
  },
  externalApiUrl: {
    athenaUrl
  }
};