import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    const clerkName = `${user.firstName || ""} ${user.lastName || ""}`;
    const clerkUsername =
      user.username ?? user.emailAddresses[0].emailAddress.split("@")[0];
    const clerkEmail = user.emailAddresses[0].emailAddress;
    const clerkImage = user.imageUrl;

    if (existingUser) {
      // lakukan update
      return await prisma.user.update({
        where: {
          clerkId: userId,
        },
        data: {
          name: clerkName,
          username: clerkUsername,
          email: clerkEmail,
          image: clerkImage,
        },
      });
    }

    // create jika belum ada
    return await prisma.user.create({
      data: {
        clerkId: userId,
        name: clerkName,
        username: clerkUsername,
        email: clerkEmail,
        image: clerkImage,
      },
    });
  } catch (error) {
    console.log("Error in syncUser", error);
  }
}
