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
    `/workers/${id || ':id'}`
}
