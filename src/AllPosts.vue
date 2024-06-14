<script setup>

</script>

<template>
  <div class="all-posts">
    <div class="heading">All blog posts</div>
    <div class="post-box">
      <div v-for="item in 6" class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <div class="title">UX review presentations</div>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.all-posts {
  margin-top: 60px;

  .heading {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 32px;
    font-weight: 600;
  }

  .post-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 32px;

    .post {
      img {
        height: 200px;
        object-fit: cover;
      }

      .info-box {
        .time {
          font-size: 14px;
          line-height: 20px;
          color: #6941C6;
          font-weight: 600;
          margin-top: 16px;
        }

        .title {
          margin-top: 12px;
          font-size: 24px;
          line-height: 32px;
          color: #1A1A1A;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .intro {
          margin-top: 12px;
          font-size: 16px;
          line-height: 24px;
          color: #667085;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
