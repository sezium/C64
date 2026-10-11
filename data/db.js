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
    {
      "id": 2,
      "title": "CHIP8 Emulator",
      "description": "A simple Chip8 emulator written in C with no AI",
      "link": "https://github.com/sezium/chip8",
      "created_at": "2026-09-10T10:00:00Z"
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
    {
      "id": 3,
        "title": "Why Programming Should Be Called Recreational Programming",
        "date": "2026-10-11",
        "body": "I think that a lot of the time, when people want to get into programming, they do it for the money. I mean, it's not a bad thing; it's the first thought that comes to mind. Right now, as I'm writing this (11-10-2026), we don't program as often as before. AI is becoming such a big thing that it outclasses almost every programmer. Of course, AI will never get dumber, and this will lead to constant improvement over time. And with that, programming is also changing. Fewer people program because AI can do it faster and better (this leads humans to delegate everything to AI, but I will discuss this topic in another post). To me, programming has two meanings: 1. You do it for the knowledge, to learn more things, and 2. to produce something no one has ever created. There wasn't really a point in producing something that already existed without learning something new. With AI and the progress it is making, you can't really create something new, and this leads to step 1 and a new form of programming: \"recreational programming\". Recreational programming only refers to the act of programming without AI, doing it for pure enjoyment. I do it to escape reality or create my own reality so that I can forget what the real world looks like. Because AI is better and is becoming more widespread, there is a tiny difference between an AI that produces an app, an OSS, or something else and a human who does the same. The difference is passion: humans enjoy programming and solving problems, even if the solutions they create are suboptimal. Humans do it for fun, to learn, to challenge themselves, because they like it. This will lead to fewer and fewer programmers, but the ones who stick around will be the only pure and genuine ones, who do it because they love it. AI has removed the economic reward and, I'm sure, will continue to do so in the future. This logic can be applied to every office job. In fact, jobs will be eliminated because of this (there may be supervisor ai jobs, pure BS btw), and a basic income will be introduced in the future (I hope). The jobs that will not be touched in the near future are physical ones, so if you want a stable income it's a good idea to get it. In the long run, every job will be automated, so please pick a topic, something you like, and go into detail. Your life will be made up of the hobbies you enjoy. However, there is no guarantee that a form of universal basic income will exist in the future, and perhaps we will have to fight for it through protests and demonstrations. This would preserve culture, human dignity, and the masses. So, if you're thinking of programming just to make money, forget it. From now on, this will never be possible. Programming is dead. Recreational programming will never die."
    }
  ]
};
