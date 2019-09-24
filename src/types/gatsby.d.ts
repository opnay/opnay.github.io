import { NavigateFn } from '@reach/router';
import { Location } from 'history';

export type PageProps<T extends object> = {
  data: T;

  location: Location;
  navigate: NavigateFn;

  path: string;
  uri: string;
};
