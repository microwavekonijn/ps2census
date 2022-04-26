import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CensusServerError } from './exceptions/census-server.error';
import { CensusRestException } from './exceptions/census-rest.exception';
import { PS2Environment } from '../types/ps2.options';
import { GetQuery } from './get.query';
import { CensusGetResponse } from './types/census';
import { CollectionNames, Conditions, Params } from './types/collection';
import { RestContract } from './concern/rest.contract';

export interface RestClientOptions {
  serviceId?: string;
  baseURL?: string;
  axios?: Pick<
    AxiosRequestConfig,
    'timeout' | 'timeoutErrorMessage' | 'httpAgent' | 'httpsAgent' | 'proxy'
  >;
}

/**
 * A direct interface to interact with the Census api
 */
export class RestClient implements RestContract {
  static readonly CENSUS_HTTP = 'http://census.daybreakgames.com';
  static readonly CENSUS_HTTPS = 'https://census.daybreakgames.com';

  private api: AxiosInstance;

  constructor(
    readonly environment: PS2Environment,
    {
      serviceId,
      baseURL = RestClient.CENSUS_HTTPS,
      axios = {},
    }: RestClientOptions = {},
  ) {
    if (serviceId) baseURL += `/s:${serviceId}`;
    else
      console.warn(
        'RestClient is missing a ServiceID, it is recommended to use one. https://census.daybreakgames.com/#service-id',
      );

    this.api = Axios.create({
      baseURL,
      maxRedirects: 0,
      transformResponse(data) {
        data = JSON.parse(data);

        if (data.errorMessage || data.errorCode)
          throw new CensusServerError(data);

        if (data.error) throw new CensusRestException(data.error);

        return data;
      },
      ...axios,
    });
  }

  /**
   * Create a new get query builder
   *
   * @param collection
   */
  getQueryBuilder<C extends CollectionNames>(collection: C): GetQuery<C> {
    return new GetQuery(this, collection);
  }

  /**
   * Run a count query
   *
   * @param collection
   * @param query
   */
  async count<C extends CollectionNames>(
    collection: C,
    query: Conditions<C>,
  ): Promise<number> {
    const { data } = await this.api.get(
      `/count/${this.environment}:v2/${collection}`,
      { params: query },
    );

    return data.count;
  }

  /**
   * Execute a get query directly
   *
   * @param collection
   * @param params
   */
  async get<C extends CollectionNames, R>(
    collection: C,
    params: Params<C>,
  ): Promise<CensusGetResponse<C, R>> {
    const { data } = await this.api.get(
      `/get/${this.environment}:v2/${collection}`,
      { params },
    );

    return data;
  }
}
