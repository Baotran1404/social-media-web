export const isLikedByReqUser = (reqUserId, post) => {
    const likes = post.likes || post.liked || [];
    for (let user of likes) {
        if (reqUserId === user._id || reqUserId === user.id) {
            return true;
        }
    }
    return false;
};