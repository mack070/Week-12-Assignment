import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import ToastButton from "../components/Toast";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
Image;
Link;

export default async function Posts({ searchParams }) {
  // get the userId from clerk
  const { userId } = auth();

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id;`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    console.log("Someone posted");
    // get information from the form
    const content = formData.get("content");

    // get the profile id from the database
    const result = await db.query(
      `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;

    // add the new post to the database
    await db.query(`INSERT INTO posts (profile_id, content) VALUES ($1, $2)`, [
      profileId,
      content,
    ]);
    revalidatePath("/");
  }

  if (searchParams.sort === "desc") {
    posts.rows.reverse();
  }

  return (
    <div>
      <div>
        <header className="reviews-logo">
          <img
            src="https://trello.com/1/cards/665db5c053a2259891f53092/attachments/665f3f14842e94a0ce5acc84/previews/665f3f15842e94a0ce5acc8e/download/Design.jpeg"
            alt="Reviews logo image"
          ></img>
        </header>
        <div className="createposts">
          <SignedIn>
            <div className="addpost">
              <h6>Leave us a review...</h6>
              <form action={handleAddPost}>
                <textarea
                  name="content"
                  placeholder="What would you like to say?"
                ></textarea>
                <ToastButton />
              </form>
            </div>
          </SignedIn>

          <SignedOut>
            <h2>You need to sign in to post a review</h2>
            <SignInButton />
          </SignedOut>

          <Link
            className="ascending bg-rose-200 w-40 font-bold p-0.7 m-2 text-center center"
            href="/reviews?sort=asc"
          >
            Sort Ascending
          </Link>
          <Link
            className="descending  bg-rose-200 w-40 font-bold p-0.7 m-2 text-center"
            href="/reviews?sort=desc"
          >
            Sort Descending
          </Link>
          <div className="posts">
            {posts.rows.map((post) => {
              return (
                <div key={post.id} className="post">
                  <h5>{post.username} says...</h5>
                  <p>{post.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
