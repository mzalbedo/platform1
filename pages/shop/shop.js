var app = getApp()
Page({
  data: {

    // 物件信息
    liveList: [
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i4/TB2QviXnFkoBKNjSZFkXXb4tFXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '电风扇',
        desp: '30RMB',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2SiULFHSYBuNjSspfXXcZCpXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '书桌',
        desp: '50RMB',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i1/TB2gKdglFooBKNjSZFPXXXa2XXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '台灯',
        desp: '30RMB',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2y3KVIf5TBuNjSspmXXaDRVXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '雨伞',
        desp: '25RMB',
        online: '877',
        avid: 'av8'
      },
    //==============================
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i4/TB2QviXnFkoBKNjSZFkXXb4tFXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '电风扇',
        desp: '30RMB',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2SiULFHSYBuNjSspfXXcZCpXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '书桌',
        desp: '50RMB',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i1/TB2gKdglFooBKNjSZFPXXXa2XXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '台灯',
        desp: '30RMB',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2y3KVIf5TBuNjSspmXXaDRVXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '雨伞',
        desp: '25RMB',
        online: '877',
        avid: 'av8'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i4/TB2QviXnFkoBKNjSZFkXXb4tFXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '电风扇',
        desp: '30RMB',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2SiULFHSYBuNjSspfXXcZCpXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '书桌',
        desp: '50RMB',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i1/TB2gKdglFooBKNjSZFPXXXa2XXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '台灯',
        desp: '30RMB',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2y3KVIf5TBuNjSspmXXaDRVXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '雨伞',
        desp: '25RMB',
        online: '877',
        avid: 'av8'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i4/TB2QviXnFkoBKNjSZFkXXb4tFXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '电风扇',
        desp: '30RMB',
        online: '877',
        avid: 'av5'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2SiULFHSYBuNjSspfXXcZCpXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/d1bec5ec111987537ecf3e7f43a8b3678ed3c5c3.jpg',
        name: '书桌',
        desp: '50RMB',
        online: '877',
        avid: 'av6'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i1/TB2gKdglFooBKNjSZFPXXXa2XXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i0.hdslb.com/bfs/face/1e31ac069058528e26b9be60b26d86c9c9a99f62.jpg',
        name: '台灯',
        desp: '30RMB',
        online: '877',
        avid: 'av7'
      },
      {
        coverImg: 'http://img.alicdn.com/bao/uploaded/i2/TB2y3KVIf5TBuNjSspmXXaDRVXa_!!0-fleamarket.jpg_728x728.jpg',
        avatarImg: 'http://i2.hdslb.com/bfs/face/c55b2eae13646925187514c6f19e19293294d0c5.jpg',
        name: '雨伞',
        desp: '25RMB',
        online: '877',
        avid: 'av8'
      },


    ],
  },
  onLoad: function () { }
})
