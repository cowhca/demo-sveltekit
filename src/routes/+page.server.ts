import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
const response = await prisma.locationDay.findMany({
    where: { temperature_2m_max: {
      gte: 3222
    } },
  })

return { feed: response };
}) satisfies PageServerLoad;