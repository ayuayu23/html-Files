window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.snow_container');
  
    // 雪を生成する関数
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 8;
      const maxSize = 12;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
  
      // 一定時間が経てば雪を消す
      setTimeout(() => {
        petalEl.remove();
      }, 10000);
    }
  
    // 雪を生成する間隔をミリ秒で指定
    setInterval(createPetal, 300);
  });