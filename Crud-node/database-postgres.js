import sql from "./db.js";
import { randomUUID } from "node:crypto";

export class DatabasePostgres {
  async list(query) {
    let videos;

    if (query) {
      videos = await sql`select * from videos where title ilike ${
        "%" + query + "%"
      }`;
    } else {
      videos = await sql`select * from videos `;
    }

    return videos;
  }

  async create(video) {
    const videoId = randomUUID();
    const { title, description, duration } = video;

    await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title} , ${description}, ${duration}) `;
  }

  async update(id, video) {
    const { title, description, duration } = video;

    await sql`UPDATE VIDEOS SET title = ${title} , description =  ${description}, duration = ${duration} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`DELETE FROM VIDEOS WHERE id = ${id}`;
  }
}
