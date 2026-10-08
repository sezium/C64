/* js/api/mock.js
 * Local data client exposing getPosts() and getProjects().
 * Data comes from DB_DATA (data/db.js); no network request is made.
 * A small artificial delay simulates network latency.
 * Depends on: DB_DATA.
 */

const DB = (() => {
  const LATENCY_MS = 0;     // fake network delay
  const FAIL_RATE  = 0;     // 0..1, set e.g. 0.2 to test the error path

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  /**
   * Simulates a GET on a table: waits, maybe fails, returns the rows
   * ordered by created_at descending.
   *
   * @param   {string} table  'posts' | 'projects'
   * @returns {Promise<object[]>}
   */
  async function get(table) {
    await sleep(LATENCY_MS);
    if (Math.random() < FAIL_RATE) throw new Error('HTTP 503');
    return [...(DB_DATA[table] || [])]
      .sort((a, b) => b.created_at.localeCompare(a.created_at));
  }

  return {
    /** @returns {Promise<object[]>} */
    getPosts()    { return get('posts');    },

    /** @returns {Promise<object[]>} */
    getProjects() { return get('projects'); },
  };
})();
