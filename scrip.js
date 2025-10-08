// Hiệu ứng cuộn hiện dần
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});





function showArticle(id) {
    const contentDiv = document.getElementById("article-content");

    // Ẩn dần nội dung cũ trước khi thay
    contentDiv.classList.remove("show");

    setTimeout(() => {
      let html = "";
      if (id === 1) {
        html = `
        <img src="https://cdn.prod.website-files.com/64b965b60f74a4d901f82698/689b4112e7725f3f0917eb80_image5-p-1080.jpg" alt="Ảnh minh họa phần 1">
          <h2>“TREO LÀ GÌ” – Phần 1</h2>
          <p>Bài viết này giải thích khái niệm "treo" trong ngôn ngữ đời sống và các nền văn hoá khác nhau. 
          "Treo" có thể mang ý nghĩa chờ đợi, tạm ngưng, hoặc là một biểu tượng của sự giữ lại điều gì đó.</p>
        `;
      } else if (id === 2) {
        html = `
          <h2>“TREO LÀ GÌ” – Phần 2</h2>
          <p>Phần này bàn về những tình huống "treo" trong cuộc sống hiện đại: 
          công việc bị trì hoãn, cảm xúc bị treo lơ lửng, hoặc những mối quan hệ chưa được kết thúc rõ ràng.</p>
        `;
      } else if (id === 3) {
        html = `
          <h2>“TREO LÀ GÌ” – Câu chuyện phía sau</h2>
          <p>Bài này kể lại các câu chuyện thực tế của những con người đang "treo" giữa lựa chọn và quyết định,
          giúp người đọc hiểu sâu hơn về giá trị của hành động và sự chờ đợi.</p>
        `;
      }else if (id === 4) {
        html = `
          <h2>“TREO LÀ GÌ” – Câu chuyện phía sau</h2>
          <p>Bài này kể lại các câu chuyện thực tế của những con người đang "treo" giữa lựa chọn và quyết định,
          giúp người đọc hiểu sâu hơn về giá trị của hành động và sự chờ đợi.</p>
        `;
      }else if (id === 5) {
        html = `
          <h2>“TREO LÀ GÌ” – Câu chuyện phía sau</h2>
          <p>Bài này kể lại các câu chuyện thực tế của những con người đang "treo" giữa lựa chọn và quyết định,
          giúp người đọc hiểu sâu hơn về giá trị của hành động và sự chờ đợi.</p>
        `;
      }else if (id === 6) {
        html = `
          <h2>“TREO LÀ GÌ” – Câu chuyện phía sau</h2>
          <p>Bài này kể lại các câu chuyện thực tế của những con người đang "treo" giữa lựa chọn và quyết định,
          giúp người đọc hiểu sâu hơn về giá trị của hành động và sự chờ đợi.</p>
        `;
      }

      // Thay nội dung mới
      contentDiv.innerHTML = html;

      // Hiện dần nội dung mới
      setTimeout(() => contentDiv.classList.add("show"), 50);

    }, 300);
  }

  