module.exports = {
  USERS_INDEX: '/users',
  USERS_SHOW: '/users/:id',
  USERS_CREATE: '/users',
  USERS_UPDATE: '/users/:id',
  USERS_DELETE: '/users/:id',
  USERS_LOGIN: '/users/:id',

  WORKERS_INDEX: '/workers',
  WORKERS_SHOW: '/workers/:id',
  WORKERS_CREATE: '/workers',
  WORKERS_UPDATE: '/workers/:id',
  WORKERS_DELETE: '/workers/:id',
  WORKERS_LOGIN: '/workers/:id',
  WORKERS_FILTER: '/filter/:city',

  REQUESTS_INDEX: '/requests',
  REQUESTS_SHOW: '/requests/:id',
  REQUESTS_CREATE: '/requests',
  REQUESTS_UPDATE: '/requests/:id',
  REQUESTS_DELETE: '/requests/:id',

  ADDRESS_ADD: '/addressAdd/:id',
  ADDRESS_DELETE: '/addressDelete/:id',

  usersShowRoute: id =>
    `/users/${id || ':id'}`,

  usersUpdateRoute: id =>
    `/users/${id || ':id'}`,

  usersDeleteRoute: id =>
    `/users/${id || ':id'}`,

  workersShowRoute: id =>
    `/workers/${id || ':id'}`,

  workersUpdateRoute: id =>
    `/workers/${id || ':id'}`,

  workersDeleteRoute: id =>
    `/workers/${id || ':id'}`,

  addressAddRoute: id =>
    `/addressAdd/${id || ':id'}`,

  addressDeleteRoute: id =>
    `/addressDelete/${id || ':id'}`,

  requestsShowRoute: id =>
    `/requests/${id || ':id'}`,

  requestsUpdateRoute: id =>
    `/requests/${id || ':id'}`,

  requestsDeleteRoute: id =>
    `/requests/${id || ':id'}`,

}
