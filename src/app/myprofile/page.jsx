import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import ToastButton from "../components/Toast";
import { notFound } from "next/navigation";

export default async function Posts() {
  // get the userId from clerk
  const { userId } = auth();

  // get the clerk id from the database using const like below
  const profile = await db.query(
    `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
  );

  const profiledata = profile.rows[0].id;

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id WHERE posts.profile_id = ${profiledata}`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    console.log("Someone posted");
    // get information from the form
    const content = formData.get("content");


    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES (${profiledata}, '${content}')`
    );
    revalidatePath("/");
  }

  return (
    <div className="createposts">
      <h2>
        My Profile
      </h2>
      <SignedIn>
        <div className="addpost">
          <h3>Add a review...</h3>
          <form action={handleAddPost}>
            <textarea
              name="content"
              placeholder="What would you like to say?"
            ></textarea>
<ToastButton/>
          </form>
        </div>
      </SignedIn>

      <SignedOut>
        <p>You need to sign in to leave a review</p>
        <SignInButton />
      </SignedOut>

      <h3>My Reviews</h3>
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
