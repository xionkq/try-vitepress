<script setup>

</script>

<template>
  <div class="all-posts">
    <div class="heading">All blog posts</div>
    <div class="post-box">
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">1 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-1">Markdown Examples 1</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">2 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-2">Markdownmore Examples 2</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">3 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-3">Markdown Examples 3</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">4 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-4">Markdown Examples 4</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">5 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-5">Markdown Examples 5</a>
          <div class="intro">How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?</div>
        </div>
      </div>
      <div class="post">
        <img src="/post.png" alt="post" />
        <div class="info-box">
          <div class="time">6 Jan 2023</div>
          <a class="title" href="./posts/markdown-examples-6">Markdown Examples 6</a>
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
