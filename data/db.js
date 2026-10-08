/* data/db.js
 * Site content: projects and blog posts.
 * Edit this file to change what PROJECTS and BLOG show.
 * Loaded with a plain <script> tag, so no fetch is needed.
 */

const DB_DATA = {
  "projects": [
    {
      "id": 1,
      "title": "C64 Terminal Portfolio",
      "description": "Nothing to see here.",
      "link": "https://sezium.github.io/C64/",
      "created_at": "2026-03-10T10:00:00Z"
    },
  ],
  "posts": [
    {
      "id": 1,
      "title": "Why I built a C64 website",
      "date": "2026-03-12",
      "body": "Idk I like the C64 screen",
      "created_at": "2026-03-12T09:00:00Z"
    },
    {
      "id": 2,
      "title": "C",
      "date": "2026-01-20",
      "body": "int main() { return 0; }",
      "created_at": "2026-01-20T09:00:00Z"
    }
  ]
};
