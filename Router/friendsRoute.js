import { Router } from "express";
import { addFriend, updateFriend, getAllFriends, deleteFriend } from "../Controller/friendsController.js";
const router = Router()

router.post('/addFriend',addFriend)
router.put('/updateFriend', updateFriend)
router.get('/allFriends', getAllFriends)
router.delete('/deleteFriend/:id', deleteFriend)

export default router;