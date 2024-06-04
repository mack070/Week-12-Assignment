import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import ToastButton from "../components/Toast";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export default async function Posts() {
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
    console.log("Someone posted")
    // get information from the form
    const content = formData.get("content");

    // get the profile id from the database
    const result = await db.query(
      `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
    );
    const profileId = result.rows[0].id;

    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES ($1, $2)`, [profileId, content]
    );
    revalidatePath("/");
  }

  return (
    <div className="createposts">
      <h2>Reviews</h2>
      <SignedIn>
        <div className="addpost">
        <h3>Leave a review...</h3>
        <form action={handleAddPost}>
          <textarea name="content" placeholder="What would you like to say?"></textarea>
<ToastButton/>
        </form>
        </div>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to post a review</p>
        <SignInButton />
      </SignedOut>

      <h3>Reviews</h3>
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
  );
}
