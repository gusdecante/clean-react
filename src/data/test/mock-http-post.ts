import { HttpPostParams } from "../protocols/http";
import faker from "faker";

export const MockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
