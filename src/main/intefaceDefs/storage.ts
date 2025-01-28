/**
 * * Interface/Schema for the storage object
 */
interface Storage {
  discordApiData: {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
  };
}

/**
 *
 * @param {Storage} storage A helper function to make sure the storage object is valid
 * @returns {Storage} The correct storage object
 */
export default function validateStorage(storage: Storage): Storage {
  return storage;
}
