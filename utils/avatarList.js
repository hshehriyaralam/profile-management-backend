



const getRandomAvatar = () =>  {
 const avatarList = [
  // 'https://api.dicebear.com/8.x/adventurer/svg?seed=John',
  // 'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Jane',
  // 'https://api.dicebear.com/8.x/bottts/svg?seed=Robot',
  // 'https://api.dicebear.com/8.x/avataaars/svg?seed=Person1',
  // 'https://api.dicebear.com/8.x/micah/svg?seed=User123',
  // 'https://api.dicebear.com/8.x/pixel-art/svg?seed=PixelGuy',
  // 'https://api.dicebear.com/8.x/thumbs/svg?seed=FunnyFace',
  // 'https://api.dicebear.com/8.x/big-ears/svg?seed=BigEarsGuy',
  // 'https://api.dicebear.com/8.x/fun-emoji/svg?seed=EmojiPerson',
  // 'https://api.dicebear.com/8.x/adventurer/svg?seed=CoolPerson',
  // 'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=BusinessMan',
  // 'https://api.dicebear.com/8.x/bottts/svg?seed=TechGuy',

  //frepiks
  'https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_1280.png',
  'https://media.istockphoto.com/id/980239992/vector/happy-handsome-man-showing-thumbs-up-concept-illustration-in-cartoon-style.jpg?s=1024x1024&w=is&k=20&c=JqKtbQuEPSTQ1u_iZvXSkd1UPH8BcyiRYQrnoEk7RyQ=',
  'https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_1280.png',
  'https://media.istockphoto.com/id/2209310889/photo/3d-illustration-of-smiling-male-guy-qadir-standing-confusedly-to-choose-yes-or-no-green.jpg?s=1024x1024&w=is&k=20&c=gI3cnAfHvOBHxYl_FdS4PfOSF2GtQ4PFGzMG-xCIXYA=',
  'https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=1024x1024&w=is&k=20&c=RpgqY_TkkLaYmU9_b4KbR9QoTN0sooG4DlhO6jLXLJQ='
];
  const randomIndex = Math.floor(Math.random() * avatarList.length);
  return avatarList[randomIndex];
}


export{getRandomAvatar}