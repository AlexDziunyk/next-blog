import { formatDistance } from 'date-fns';

export const formaDateDistance = (date: string) => {
    return formatDistance(date, Date.now(), { addSuffix: true });
}