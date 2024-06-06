import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth(); // this will get the id
  async function handleUpdateProfile(formData) {
    "use server";
    const username = formData.get("username");
    const bio = formData.get("bio");

    await db.query(
      `UPDATE profiles SET username = $1, bio = $2 WHERE clerk_id = '${userId}'`
    , [username, bio]);
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Update Profile</h2>
      <p>
        <h6>Welcome to GITAWAYS, please choose a username & complete your bio to
        continue...</h6>
      </p>
      <form className="profileform" action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <input name="bio" placeholder="Bio" />
        <button>Submit</button>
      </form>
      <div className="createuser">
      <img src="https://trello.com/1/cards/665db5c053a2259891f53092/attachments/665db5cb4fcd125f61817ca9/previews/665db5cc4fcd125f61817ce8/download/My_first_design_1.jpeg" alt="Gitaways Logo"></img>
    </div>
    </div>
  );
}
