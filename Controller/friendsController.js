import { prisma } from "../Database/db.js";

// Add friend POST request
export const addFriend = async (req, res) => {
  const { firstName, lastName, contactNumber } = req.body;

  if (!firstName || !lastName || !contactNumber) {
    return res.status(400).json({
      message:
        "Please provide all required fields: firstName, lastName, and contactNumber",
    });
  }

  const findFriend = await prisma.friends.findUnique({
    where: {
      lastName: lastName,
    },
  });
  if (findFriend) {
    return res.status(400).json({ message: "Toh wala Friend already exists" });
  }

  const newFriend = await prisma.friends.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
    },
  });
  return res.status(201).json({ message: "Friend Added Successfully" });
};

//Update friend Details
export const updateFriend = async (req, res) => {
  const { id, firstName, lastName, contactNumber } = req.body;
  try {
    const existingFriend = await prisma.friends.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingFriend) {
      return res.status(404).json({
        message: "Friend not found",
      });
    }
    const friend = await prisma.friends.update({
      where: {
        id: id,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        contactNumber: contactNumber,
      },
    });
    return res
      .status(200)
      .json({ message: "Friend Details Updated Successfully" });
  } catch (err) {
    console.log(err);
  }
};

//Get all Friends details
export const getAllFriends = async (req, res) => {
  try {
    const allFriends = await prisma.friends.findMany({});
    const simplifiedFriends = allFriends.map((friend) => ({
      firstName: friend.firstName,
      lastName: friend.lastName,
    }));
    // return res.status(200).json(addFriends)

    return res.status(200).json(simplifiedFriends);
  } catch (err) {
    console.log(err);
  }
};

// Delete Friend

export const deleteFriend = async (req, res) => {
  try {
    const id = req.params.id;
    const existingFriend = await prisma.friends.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!existingFriend) {
      return res.status(404).json({ message: "Friend not found" });
    }
    await prisma.friends.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ message: "Friend deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};
