export const setUserId = (service, userId) => localStorage.setItem(`${service}UserId`, userId);

export const getUserId = (service) => localStorage.getItem(`${service}UserId`);

export const clearStorage = () => localStorage.clear();