import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import ToastButton from "../components/Toast";
import { notFound } from "next/navigation";

export default async function Posts() {
  // get the userId from clerk
  const { userId } = auth();
  // if the user code is not correct - redirect to sign in
  //if user id = null ( nextjs method)
  // get the clerk id from the database using const like below
  const profile = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );
  console.log (profile.rows[0])

  const profileid = profile.rows[0]?.id;
  const profileusername = profile.rows[0]?.username;
  const profilebio = profile.rows[0]?.bio;

  // get my new posts
  const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id WHERE posts.profile_id = ${profileid}`);

  // server action to add a new post
  async function handleAddPost(formData) {
    "use server";
    console.log("Someone posted");
    // get information from the form
    const content = formData.get("content");

    // add the new post to the database
    await db.query(
      `INSERT INTO posts (profile_id, content) VALUES (${profileid}, '${content}')`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <header className="reviews-logo">
        <img src="https://trello.com/1/cards/665db5c053a2259891f53092/attachments/665f3fcfe914f28437de452a/previews/665f3fd0e914f28437de4534/download/Design_(2).jpeg"></img>
      </header>

      <h6>My Bio</h6>
        <div className="bio">
          <p>{profilebio}</p>
          </div>
      <div className="createposts">
        <SignedIn>
          <div className="addpost">
            <h6>Add A Review:</h6>
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
          <p>Oops, you need to sign in to leave a review!</p>
          <SignInButton />
        </SignedOut>

        <h6>My Reviews</h6>
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
  );
}
