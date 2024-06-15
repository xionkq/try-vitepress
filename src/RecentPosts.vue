<script setup>

</script>

<template>
  <div class="recent-posts">
    <div class="heading">Recent blog posts</div>
    <div class="post-box">
      <div class="recent-posts-1">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples">UX review presentationsUX review presentations UX review presentationsUX review presentations</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="recent-posts-2">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples">UX review presentationsUX review presentations UX review presentationsUX review presentations</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="recent-posts-3">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples">UX review presentationsUX review presentations UX review presentationsUX review presentations</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="recent-posts-4">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples">UX review presentationsUX review presentations UX review presentationsUX review presentations</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recent-posts {
  margin-top: 60px;
}

.recent-posts .heading {
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;
  font-weight: 600;
}

.recent-posts .post-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
}

.recent-posts .recent-posts-1 {
  width: 100%;
  height: 400px;
  grid-row: 1 / 3;
}

.recent-posts .recent-posts-1 img {
  height: 200px;
  width: 100%;
}

.recent-posts .recent-posts-1 .info-box {
  margin-top: 16px;
}

.recent-posts .recent-posts-2, .recent-posts-3 {
  width: 100%;
  height: 180px;
  display: flex;
}

.recent-posts .recent-posts-2, .recent-posts-3 img {
  width: 300px;
  margin-right: 24px;
}

.recent-posts .recent-posts-2, .recent-posts-3 .info-box {
  width: calc(100% - 324px);
}

.recent-posts .recent-posts-1 .info-box {
  margin-top: 16px;
}

.recent-posts .recent-posts-2 {
  width: 100%;
  height: 180px;
  display: flex;
}

.recent-posts .recent-posts-2 img {
  width: 300px;
  margin-right: 24px;
}

.recent-posts .recent-posts-2 .info-box {
  width: calc(100% - 324px);
}

.recent-posts .recent-posts-3 {
  width: 100%;
  height: 180px;
  display: flex;
}

.recent-posts .recent-posts-3 img {
  width: 300px;
  margin-right: 24px;
}

.recent-posts .recent-posts-3 .info-box {
  width: calc(100% - 324px);
}

.recent-posts .recent-posts-4 {
  width: 100%;
  height: 180px;
  grid-column: 1 / 3;
  display: flex;
}

.recent-posts .recent-posts-4 img {
  width: calc(50% - 16px);
  margin-right: 32px;
}

.recent-posts .recent-posts-4 .info-box {
  width: calc(50% - 16px);
}

.recent-posts img {
  object-fit: cover;
}

.recent-posts .info-box .time {
  font-size: 14px;
  line-height: 20px;
  color: #6941C6;
  font-weight: 600;
}

.recent-posts .info-box .title {
  margin-top: 12px;
  font-size: 24px;
  line-height: 32px;
  color: #1A1A1A;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.recent-posts .info-box .intro {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
