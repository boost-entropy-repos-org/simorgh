const mediaIdRegex = '[a-z0-9]+';
const ampRegex = '.amp';

const buildMediaRoutes = servicesWithMedia =>
  Object.keys(servicesWithMedia).map(service => {
    return `/:service(${service})/:serviceId(${servicesWithMedia[service].join(
      '|',
    )})/:mediaId(${mediaIdRegex}):amp(${ampRegex})?`;
  });

export default buildMediaRoutes;
